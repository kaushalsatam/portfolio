import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";

const AtAGlance = () => {
  const features = [
    {
      Icon: FileTextIcon,
      name: "A Card",
      description: "Card A",
      href: "/",
      cta: "Learn more",
      background: <div />,
      className: "lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2", // A (col-span-2)
    },
    {
      Icon: InputIcon,
      name: "B Card",
      description: "Card B",
      href: "/",
      cta: "Learn more",
      background: <div />,
      className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-3", // B (row-span-2)
    },
    {
      Icon: GlobeIcon,
      name: "C Card",
      description: "Card C",
      href: "/",
      cta: "Learn more",
      background: <div />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-4", // C (row-span-2)
    },
    {
      Icon: CalendarIcon,
      name: "D Card",
      description: "Card D",
      href: "/",
      cta: "Learn more",
      background: <div />,
      className: "lg:col-start-2 lg:col-end-4 lg:row-start-3 lg:row-end-4", // D (col-span-2)
    },
    {
      Icon: BellIcon,
      name: "E Card",
      description: "Card E",
      href: "/",
      cta: "Learn more",
      background: <div />,
      className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3", // E (single cell)
    },
  ];
  return (
    <div className="px-12">
      <BentoGrid className="lg:grid-rows-3 lg:grid-cols-3 aspect-square">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
};

export default AtAGlance;
