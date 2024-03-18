import Image from 'next/image'
interface ButtonProps {

title : string,
icon?: string,
className : string

}

const Button = ({ title, icon , className}  : ButtonProps) => {
	return (
		<button  className={`flexCenter gap-3 rounded-full  ${className}`}>
			
			{icon && <Image src={icon} alt={title} width={24} height={24}/>}
			<label className="bold-16 whitespace-nowrap">{title}</label>
		</button>
	)
}

export default Button