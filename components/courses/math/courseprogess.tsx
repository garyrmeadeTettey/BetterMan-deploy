import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface CourseProgressProps {
  value: number;
  variant?: "default" | "success";
  size?: "default" | "sm";
}

const colorByVariant = {
  default: "text-sky-700",
  success: "text-emerald-700",
};

const sizeByVariant = {
  default: "text-sm",
  sm: "text-xs",
};

export const CourseProgress = ({
  value,
  variant = "default", // Provide a default value for the variant
  size,
}: CourseProgressProps) => {
  // If the progress is 0, display "Not Started"
  if (value === 0) {
    return <p className={cn('font-medium', colorByVariant[variant], sizeByVariant[size || 'default'])}></p>;
  }

  // If the progress is 100, display "Complete"
  if (value === 100) {
    return <p className={cn('font-medium text-center mb-2', colorByVariant[variant], sizeByVariant[size || 'default'])}>Complete</p>;
  }

  // For values between 1 and 99, show the progress bar and percentage
  return (
    <div>
      <Progress className="h-2" value={value} />
      <p
        className={cn(
          'font-medium mt-2 mb-2 text-center',
          colorByVariant[variant],
          sizeByVariant[size || 'default'],
        )}
      >
        {Math.round(value)}% Complete
      </p>
    </div>
  );
};
