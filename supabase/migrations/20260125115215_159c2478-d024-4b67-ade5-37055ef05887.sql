-- Create inquiries table to store contact form submissions
CREATE TABLE public.inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  is_read BOOLEAN NOT NULL DEFAULT false
);

-- Enable Row Level Security
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit inquiries (public contact form)
CREATE POLICY "Anyone can submit inquiries"
ON public.inquiries
FOR INSERT
WITH CHECK (true);

-- Only authenticated users can view inquiries
CREATE POLICY "Authenticated users can view inquiries"
ON public.inquiries
FOR SELECT
TO authenticated
USING (true);

-- Only authenticated users can update inquiries (mark as read)
CREATE POLICY "Authenticated users can update inquiries"
ON public.inquiries
FOR UPDATE
TO authenticated
USING (true);

-- Only authenticated users can delete inquiries
CREATE POLICY "Authenticated users can delete inquiries"
ON public.inquiries
FOR DELETE
TO authenticated
USING (true);