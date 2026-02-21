export interface ToggleAnswerButtonProps {
  answer: string;
  isChecked: boolean;
  onToggle: (userAnswer: string) => void;
}
