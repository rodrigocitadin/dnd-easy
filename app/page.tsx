export default function Home() {
  return (
    <div className="flex gap-2 items-start">
      <VerticalLabelInput label="Class" />
      <HorizontalLabelInput label="Dexterity" />
      <TextareaInput label="Traits" />
    </div>
  )
}

function VerticalLabelInput({
  label
}: {
  label: string
}) {
  return (
    <div className="flex flex-col gap-0">
      <input
        className="bg-blue-100 focus:bg-blue-200 focus:outline-blue-300"
      />
      <label>{label}</label>
    </div>
  )
}

function HorizontalLabelInput({
  label
}: {
  label: string
}) {
  return (
    <div className="flex gap-2">
      <input
        className="bg-blue-100 focus:bg-blue-200 focus:outline-blue-300"
      />
      <label>{label}</label>
    </div>
  )
}

function TextareaInput({
  label
}: {
  label: string
}) {
  return (
    <div className="flex flex-col gap-0">
      <textarea
        className="resize-none h-72 w-52 bg-blue-100 focus:bg-blue-200 focus:outline-blue-300"
      />
      <label>{label}</label>
    </div>
  )
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  size: {
    width: number
    height: number
  }
}

function Input({ size, ...props }: InputProps) {
  return (
    <input
      className={`h-[${size.height}rem] w-[${size.height}rem]`}
      {...props}
    />
  )
}
