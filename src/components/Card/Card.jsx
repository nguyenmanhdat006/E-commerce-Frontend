const Card = ({imagePath, title, description, actionArrow, height, width}) => {
  return (
    <div className='flex flex-col p-6'>
      <img className={`h-[${height? height: '240px'}] max-w-[${width? width:'200px'}] w-[200px] bg-cover bg-center border rounded hover:scale-105 cursor-pointer`} src={imagePath} alt='Jeans'/>
      <div className='flex justify-between'>
        <div className='flex flex-col'>
          <p className='text-[16px] p-1'>{title}</p>
          {description && <p className='text-[12px] px-1 text-gray-600'>{description}</p>}
        </div>
        {actionArrow && <div></div>}
      </div>
    </div>
  );
}

export default Card
