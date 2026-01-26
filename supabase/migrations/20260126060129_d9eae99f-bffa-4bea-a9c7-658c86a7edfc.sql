-- Enable realtime for inquiries table so admins get notifications
ALTER PUBLICATION supabase_realtime ADD TABLE public.inquiries;