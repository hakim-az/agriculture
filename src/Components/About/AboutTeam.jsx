import Team1 from '../../assets/Team/team-1.jpg'
import Team2 from '../../assets/Team/team-2.jpg'
import Team3 from '../../assets/Team/team-3.jpg'
import TeamCard from '../../Components/General/TeamCard/TeamCard'
import Newsletter from '../../Components/General/Newsletter/Newsletter'
import Title from '../../Components/General/Title/Title'

const AboutTeam = () => {

    const team =[
        {
          id: 1,
          image: Team1,
          name: 'Giovani Bacardo',
          job: 'Farmer',
        },
        {
          id: 2,
          image: Team2,
          name: 'Marianne Loreno',
          job: 'Designer',
        },
        {
          id: 3,
          image: Team3,
          name: 'Riga Pelore',
          job: 'Farmer',
        },
      ]


    return (
        <section className='pt-20'>
            <Title Title='Our Organic Experts' Label='Team' Size='2' center={true} />
            <p className='box-container text-center w-1/2 min-w-[350px]' >
                Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
            </p>
            <div className="box-container flex flex-wrap items-center justify-evenly gap-y-16 py-10">
            {team.map(({id,image,name,job}) => <TeamCard key={id} Image={image} Name={name} Job={job} /> )}
            <Newsletter />
            </div>
        </section>
    )
}

export default AboutTeam