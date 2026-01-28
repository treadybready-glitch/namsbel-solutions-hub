import { MapPin } from "lucide-react";

const Locations = () => {
  const offices = [
    {
      city: "Bangalore",
      country: "India",
      address: "No.18 Ananjanayappa Layout, Behind Jain Heights Apartment, Hennur Road Cross, Hennur",
      pincode: "560043",
      isHeadquarters: true,
    },
    {
      city: "Hyderabad",
      country: "India",
      address: "1502, Manjeera Trinity Corporate",
      pincode: "500072",
    },
    {
      city: "Mysuru",
      country: "India",
      address: "SJCE STEP JSS College Road, University Of Mysore Campus",
      pincode: "570006",
    },
    {
      city: "London",
      country: "United Kingdom",
      address: "128 City Road",
      pincode: "EC1V 2NX",
    },
  ];

  return (
    <section className="py-16 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Global Presence
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-4">
            Our <span className="text-gradient-yellow">Offices</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            With offices across India and the UK, we're positioned to serve clients worldwide.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offices.map(({ city, country, address, pincode, isHeadquarters }) => (
            <div 
              key={city}
              className={`p-6 rounded-xl border transition-all duration-300 hover:border-primary/50 hover-lift ${
                isHeadquarters 
                  ? "bg-primary/5 border-primary/30" 
                  : "bg-secondary border-border"
              }`}
            >
              <div className="flex items-start gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                  isHeadquarters ? "bg-primary/20" : "bg-primary/10"
                }`}>
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg">
                    {city}
                  </h3>
                  <p className="text-sm text-muted-foreground">{country}</p>
                </div>
              </div>
              {isHeadquarters && (
                <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded mb-3">
                  Headquarters
                </span>
              )}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {address}, {pincode}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
