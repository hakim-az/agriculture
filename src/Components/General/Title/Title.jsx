import './Title.css'


const Title = ({Label, Title, Size, center}) => {

    const Header = `h${Size}`;

    return (

        <div className={`${center ? 'text-center' : 'placeholder:'} py-10 title`}>
            {Label ? <span className='text-green span-title'>{Label}</span> : '' }
            <Header>{Title}</Header>
        </div>
    )
}

export default Title