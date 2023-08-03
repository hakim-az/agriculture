import './Title.css'


const Title = ({Label, Title,Type, center}) => {

    const Header = `h${Type}`;

    return (

        <div className={`${center ? 'text-center' : 'placeholder:'}`}>
            {Label ? <span className='text-green span-title'>{Label}</span> : '' }
            <Header>{Title}</Header>
        </div>
    )
}

export default Title