import Image from '../../assets/Backgrounds/team.png'
import Banner from '../../Components/General/Banner/Banner'
import Title from '../../Components/General/Title/Title'
import Team1 from '../../assets/Team/team-1.jpg'
import Team2 from '../../assets/Team/team-2.jpg'
import Team3 from '../../assets/Team/team-3.jpg'
import Team4 from '../../assets/Team/team-4.jpg'
import Team5 from '../../assets/Team/team-5.jpg'
import Team6 from '../../assets/Team/team-6.jpg'
import TeamCard from '../../Components/General/TeamCard/TeamCard'
import Newsletter from '../../Components/General/Newsletter/Newsletter'

const Team = () => {

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
    {
      id: 4,
      image: Team4,
      name: 'Keira Knightley',
      job: 'Farmer',
    },
    {
      id: 5,
      image: Team5,
      name: 'Scott Lawrence',
      job: 'Designer',
    },
    {
      id: 6,
      image: Team6,
      name: 'Karen Allen',
      job: 'Farmer',
    },
  ]

  return (
    <>
        <Banner Bg={Image} text='Our Team' />
        <Title Title='Our Organic Experts' Label='Team' Size='2' center={true} />
        <div className="box-container flex flex-wrap items-center justify-evenly gap-y-16 py-10">
          {team.map(({id,image,name,job}) => <TeamCard key={id} Image={image} Name={name} Job={job} /> )}
          <Newsletter />
        </div>
    </>
  )
}

export default Team