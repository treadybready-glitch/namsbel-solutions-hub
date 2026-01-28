import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  ArrowLeft,
  LogOut,
  Mail,
  Building,
  Calendar,
  Check,
  Trash2,
  Inbox,
  RefreshCw,
  Bell,
} from "lucide-react";

interface Inquiry {
  id: string;
  name: string;
  email: string;
  company: string | null;
  message: string;
  created_at: string;
  is_read: boolean;
}

const AdminInquiries = () => {
  const navigate = useNavigate();
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);

  const fetchInquiries = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("inquiries")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setInquiries(data || []);
    } catch (error) {
      console.error("Error fetching inquiries:", error);
      toast.error("Failed to load inquiries");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (!session) {
          navigate("/admin");
        }
      }
    );

    // Check initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate("/admin");
      } else {
        fetchInquiries();
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate, fetchInquiries]);

  // Set up realtime subscription for new inquiries
  useEffect(() => {
    const channel = supabase
      .channel('inquiries-realtime')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'inquiries',
        },
        (payload) => {
          const newInquiry = payload.new as Inquiry;
          setInquiries((prev) => [newInquiry, ...prev]);
          
          // Show notification for new inquiry
          toast.success(
            <div className="flex items-center gap-2">
              <Bell className="w-4 h-4" />
              <div>
                <p className="font-medium">New inquiry from {newInquiry.name}</p>
                <p className="text-sm text-muted-foreground">{newInquiry.email}</p>
              </div>
            </div>,
            { duration: 5000 }
          );
          
          // Play notification sound
          try {
            const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2teleQUSUbvZ9sWcUQMKXMLe1bFvKQ+K0+rMmlwVHKXc56ZpLBuB0vS+kmglLI3P2q99UjBLhMff0K5dRz1cltjIj1tCT26ayrJ8WUFhnMbEiGNKTnKSyrd2V0RjlsG1fWNKT4GXzad4VEJolbu5dnNQUoqVzKJ6UkNsl8a9bHVRSo6YxZ5vST1lmsHAfHVQS4iTxaR8VEdmkcfFfnVNSIeXxaJ5U0VqkcTMhnVPVpWb0ptiT0hblcbSjlVGSHCYw5RXQEZtnsa0bEU8cJnHqmpCNlqbzLluRDZym8Goa088ZJq9lXJJSW6YwZ51SEFul7+wdEdFa5W8s35NSWCR0suNVD5QhL3FmGdMWJPDu4dQSFaKvcqOWUtdlsCyhU1DTIq/wZVbTleNv7uGUUtQirfBmF5LU4e3vodOSFGLu8SYVVN0qMzOiVRIWpTBtH5MQFGL07iFTkFVjMC9lllKU4y6tYBNP1WOwMWdXFBais3KiFFMXZbDtH5HPVCH1byFTkVdk8K8h1FJWY+8uIZLPFKMv8GZW1BajcS/iE9EWJDCvoZHO1OOxMCXVEtZksu/hkY9U4u/wJNUT2Gbyr2DRUBVYLXY15ZfQUFpnMS1fkU2aJq7rXFEPXWixbBwRDNtocO4dUI6dqHBp3dEQYGlxKt3RUiEo7+re0ZHgp+7p3tGRoegxah4Rj+Bn7mkckg/gqC4pXNIP4qnvqZuQjuGpLure0hFiqe7rXlIS46kt6p+REeQqsCmd0k7hanAtXNEOoSotbJ9R0qLqLexfkRHiaeys3xER4uotLV+P0WIqLO1f0FFjKmysnxFQIinsrV+QkCNqrSwf0NGiq2vsIBBRo6vrayCQEGOra2sgEBFia6xsnpDO4ytsLN/P0OKr7GzfD9Bja6wtn9CQoywsbZ9QT+Lr7G2e0E7jbKztnw+QI2zsrd+PT+NsrO3fz0/jrKzt30+P46zs7d/PT6Ps7S4fD0/jrS0t3w9Po60tbd8PD6OtLS3fDs+j7W1tn07O4+1trZ9Oz2Otba2fDs9jrS2t307PI+1trZ7Oz2Ptba1fDw7j7a2t3s7PI61trZ8OzyPtba2ezs8kLW2tXs7O4+2trZ7OzuPtra2ezs7kLa1tnw7O5C2trZ7OzuQtra2ezs7kLa2tns7O5C2trZ7OzuQtra2ezs7kLa2tns7O5C2trZ7Ozk=');
            audio.volume = 0.3;
            audio.play().catch(() => {});
          } catch (e) {
            // Audio play failed, ignore
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const markAsRead = async (id: string) => {
    try {
      const { error } = await supabase
        .from("inquiries")
        .update({ is_read: true })
        .eq("id", id);

      if (error) throw error;

      setInquiries((prev) =>
        prev.map((inq) => (inq.id === id ? { ...inq, is_read: true } : inq))
      );
      if (selectedInquiry?.id === id) {
        setSelectedInquiry({ ...selectedInquiry, is_read: true });
      }
    } catch (error) {
      console.error("Error marking as read:", error);
    }
  };

  const deleteInquiry = async (id: string) => {
    try {
      const { error } = await supabase.from("inquiries").delete().eq("id", id);

      if (error) throw error;

      setInquiries((prev) => prev.filter((inq) => inq.id !== id));
      if (selectedInquiry?.id === id) {
        setSelectedInquiry(null);
      }
      toast.success("Inquiry deleted");
    } catch (error) {
      console.error("Error deleting inquiry:", error);
      toast.error("Failed to delete inquiry");
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin");
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const unreadCount = inquiries.filter((i) => !i.is_read).length;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/")}
              className="text-muted-foreground"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to site
            </Button>
            <div className="h-6 w-px bg-border" />
            <h1 className="font-display text-xl font-bold">Inquiries</h1>
            {unreadCount > 0 && (
              <span className="bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded-full animate-pulse">
                {unreadCount} new
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={fetchInquiries}>
              <RefreshCw className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Admin Nav */}
      <div className="border-b border-border bg-card/30">
        <div className="container mx-auto px-6">
          <nav className="flex gap-1">
            <a
              href="/admin/inquiries"
              className="px-4 py-3 text-sm font-medium text-primary border-b-2 border-primary"
            >
              Inquiries
            </a>
            <a
              href="/admin/newsletter"
              className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Newsletter
            </a>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Inquiry List */}
          <div className="lg:col-span-1 space-y-2">
            {isLoading ? (
              <div className="text-center py-12 text-muted-foreground">
                Loading...
              </div>
            ) : inquiries.length === 0 ? (
              <div className="text-center py-12">
                <Inbox className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No inquiries yet</p>
              </div>
            ) : (
              inquiries.map((inquiry) => (
                <button
                  key={inquiry.id}
                  onClick={() => {
                    setSelectedInquiry(inquiry);
                    if (!inquiry.is_read) markAsRead(inquiry.id);
                  }}
                  className={`w-full text-left p-4 rounded-lg border transition-colors ${
                    selectedInquiry?.id === inquiry.id
                      ? "bg-primary/10 border-primary"
                      : "bg-card border-border hover:border-primary/50"
                  } ${!inquiry.is_read ? "border-l-4 border-l-primary" : ""}`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0 flex-1">
                      <p className="font-medium truncate">{inquiry.name}</p>
                      <p className="text-sm text-muted-foreground truncate">
                        {inquiry.email}
                      </p>
                    </div>
                    {!inquiry.is_read && (
                      <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2 animate-pulse" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                    {inquiry.message}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    {formatDate(inquiry.created_at)}
                  </p>
                </button>
              ))
            )}
          </div>

          {/* Inquiry Detail */}
          <div className="lg:col-span-2">
            {selectedInquiry ? (
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="font-display text-2xl font-bold">
                      {selectedInquiry.name}
                    </h2>
                    <div className="flex items-center gap-4 mt-2 text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Mail className="w-4 h-4" />
                        {selectedInquiry.email}
                      </span>
                      {selectedInquiry.company && (
                        <span className="flex items-center gap-1">
                          <Building className="w-4 h-4" />
                          {selectedInquiry.company}
                        </span>
                      )}
                    </div>
                    <span className="flex items-center gap-1 text-sm text-muted-foreground mt-2">
                      <Calendar className="w-4 h-4" />
                      {formatDate(selectedInquiry.created_at)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {!selectedInquiry.is_read && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => markAsRead(selectedInquiry.id)}
                      >
                        <Check className="w-4 h-4 mr-1" />
                        Mark read
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-destructive hover:bg-destructive hover:text-destructive-foreground"
                      onClick={() => deleteInquiry(selectedInquiry.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <h3 className="font-semibold mb-3">Message</h3>
                  <p className="text-foreground whitespace-pre-wrap leading-relaxed">
                    {selectedInquiry.message}
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <Button
                    variant="hero"
                    onClick={() =>
                      (window.location.href = `mailto:${selectedInquiry.email}`)
                    }
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Reply via Email
                  </Button>
                </div>
              </div>
            ) : (
              <div className="bg-card border border-border rounded-xl p-12 text-center">
                <Mail className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Select an inquiry to view details
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminInquiries;
