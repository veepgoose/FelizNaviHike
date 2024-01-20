

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
    return(
        <input className="bg-pigment_green text-seasalt placeholder-seasalt/60 p-2 shadow-lg"
        {...props}
      />
    )
}