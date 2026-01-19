//type   /   interface Props

type Props = {
    label: string;
    color: "primary" | "secondary";
    bgColor?: string;
    onClick?: () => void;
}


const Button = ({label,color,bgColor, onClick}: Props) => {
  return (
    <button>
        color={color}
        style={}
    </button>
  )
}

export default Button;