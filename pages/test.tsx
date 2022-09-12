import { SetStateAction } from "react";

interface CardRatingProps {
  isSent: boolean;
  setSent: React.Dispatch<SetStateAction<boolean>>;
}

export function CardRating({ isSent, setSent }: CardRatingProps) {
  console.log(isSent);
}
