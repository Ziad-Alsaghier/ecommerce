import { HiOutlineTruck, HiOutlineRefresh, HiOutlineShieldCheck, HiOutlineSupport } from 'react-icons/hi';

const features = [
  { icon: HiOutlineTruck, title: "Free Shipping", desc: "On orders over 500 EGP" },
  { icon: HiOutlineRefresh, title: "Easy Returns", desc: "14-day return policy" },
  { icon: HiOutlineShieldCheck, title: "Secure Payment", desc: "100% secure checkout" },
  { icon: HiOutlineSupport, title: "24/7 Support", desc: "Contact us anytime" },
];

export default function Features() {
  return (
    <section className="bg-green-50/50 py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-4">
            {/* Icon Box */}
            <div className="bg-green-100 p-3 rounded-xl text-green-600">
              <feature.icon size={28} />
            </div>
            {/* Text Content */}
            <div>
              <h3 className="font-bold text-gray-900">{feature.title}</h3>
              <p className="text-sm text-gray-500">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}