// import { ReactNode } from "react";

// interface SectionHeadingProps {
//   children: string;
//   subtitle?: string;
//   icon?: ReactNode;
// }

// const SectionHeading = ({ children, subtitle, icon }: SectionHeadingProps) => {
//   return (
//     <div className="mb-12 text-center">
//       <div className="flex items-center justify-center gap-3 mb-4">
//         {icon && <div className="text-primary">{icon}</div>}
//         <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
//           <span className="text-primary font-mono text-3xl md:text-4xl">&lt;</span>
//           <span className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent mx-2">
//             {children}
//           </span>
//           <span className="text-primary font-mono text-3xl md:text-4xl">/&gt;</span>
//         </h2>
//       </div>
//       {subtitle && (
//         <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
//           {subtitle}
//         </p>
//       )}
//       <div className="mt-6 flex items-center justify-center gap-2">
//         <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-primary"></div>
//         <div className="h-1 w-1 rounded-full bg-primary animate-pulse"></div>
//         <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-primary"></div>
//       </div>
//     </div>
//   );
// };

// export default SectionHeading;
import { ReactNode } from "react";

interface SectionHeadingProps {
  children: string;
  subtitle?: string;
  icon?: ReactNode;
}

const SectionHeading = ({ children, subtitle, icon }: SectionHeadingProps) => {
  return (
    <div className="mb-12 text-center">
      <div className="flex items-center justify-center gap-3 mb-4">
        {icon && <div className="text-primary">{icon}</div>}
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
          {children}
        </h2>
      </div>

      {subtitle && (
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}

      <div className="mt-6 flex items-center justify-center gap-2">
        <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-primary"></div>
        <div className="h-1 w-1 rounded-full bg-primary animate-pulse"></div>
        <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-primary"></div>
      </div>
    </div>
  );
};

export default SectionHeading;
