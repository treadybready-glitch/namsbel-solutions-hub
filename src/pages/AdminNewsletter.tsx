import { useEffect, useState, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  ArrowLeft,
  LogOut,
  Mail,
  Calendar,
  Users,
  RefreshCw,
  Send,
  Trash2,
} from "lucide-react";

interface Subscriber {
  id: string;
  email: string;
  created_at: string;
}

const AdminNewsletter = () => {
  const navigate = useNavigate();
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedEmails, setSelectedEmails] = useState<string[]>([]);

  const fetchSubscribers = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("newsletter_subscribers")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setSubscribers(data || []);
    } catch (error) {
      console.error("Error fetching subscribers:", error);
      toast.error("Failed to load subscribers");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (!session) {
          navigate("/admin");
        }
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate("/admin");
      } else {
        fetchSubscribers();
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate, fetchSubscribers]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin");
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const toggleSelect = (email: string) => {
    setSelectedEmails((prev) =>
      prev.includes(email)
        ? prev.filter((e) => e !== email)
        : [...prev, email]
    );
  };

  const selectAll = () => {
    if (selectedEmails.length === subscribers.length) {
      setSelectedEmails([]);
    } else {
      setSelectedEmails(subscribers.map((s) => s.email));
    }
  };

  const sendBulkEmail = () => {
    if (selectedEmails.length === 0) {
      toast.error("Please select at least one subscriber");
      return;
    }
    
    const mailtoLink = `mailto:?bcc=${selectedEmails.join(",")}&subject=Newsletter Update from Namsbel`;
    window.location.href = mailtoLink;
  };

  const copyAllEmails = () => {
    const emails = subscribers.map((s) => s.email).join(", ");
    navigator.clipboard.writeText(emails);
    toast.success("All emails copied to clipboard");
  };

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
            <h1 className="font-display text-xl font-bold">Newsletter Subscribers</h1>
            <span className="bg-primary/20 text-primary text-xs font-semibold px-2 py-1 rounded-full">
              {subscribers.length} subscribers
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={fetchSubscribers}>
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
            <Link
              to="/admin/inquiries"
              className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Inquiries
            </Link>
            <Link
              to="/admin/newsletter"
              className="px-4 py-3 text-sm font-medium text-primary border-b-2 border-primary"
            >
              Newsletter
            </Link>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Actions Bar */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <Button
            variant="outline"
            size="sm"
            onClick={selectAll}
          >
            {selectedEmails.length === subscribers.length ? "Deselect All" : "Select All"}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={copyAllEmails}
          >
            Copy All Emails
          </Button>
          <Button
            variant="hero"
            size="sm"
            onClick={sendBulkEmail}
            disabled={selectedEmails.length === 0}
          >
            <Send className="w-4 h-4 mr-2" />
            Email Selected ({selectedEmails.length})
          </Button>
        </div>

        {/* Subscribers Grid */}
        {isLoading ? (
          <div className="text-center py-12 text-muted-foreground">
            Loading...
          </div>
        ) : subscribers.length === 0 ? (
          <div className="text-center py-12">
            <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No subscribers yet</p>
          </div>
        ) : (
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-secondary/50">
                    <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider w-12">
                      <input
                        type="checkbox"
                        checked={selectedEmails.length === subscribers.length && subscribers.length > 0}
                        onChange={selectAll}
                        className="w-4 h-4 rounded border-border"
                      />
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Subscribed On
                    </th>
                    <th className="px-4 py-3 text-right text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {subscribers.map((subscriber) => (
                    <tr 
                      key={subscriber.id}
                      className={`hover:bg-secondary/30 transition-colors ${
                        selectedEmails.includes(subscriber.email) ? "bg-primary/5" : ""
                      }`}
                    >
                      <td className="px-4 py-4">
                        <input
                          type="checkbox"
                          checked={selectedEmails.includes(subscriber.email)}
                          onChange={() => toggleSelect(subscriber.email)}
                          className="w-4 h-4 rounded border-border"
                        />
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Mail className="w-4 h-4 text-primary" />
                          </div>
                          <span className="font-medium">{subscriber.email}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{formatDate(subscriber.created_at)}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => (window.location.href = `mailto:${subscriber.email}`)}
                        >
                          <Mail className="w-4 h-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminNewsletter;
