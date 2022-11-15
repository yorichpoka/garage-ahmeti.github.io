import { useTranslation } from 'react-i18next';
import { memo } from 'react';

const HomeSection4 = () => {

  /** hoot that apply translation */
  const { t } = useTranslation();

  return (
    <div className='container'>
      <h1 className='text-orange'>
        {t(`Un réseau solide et local`)}
      </h1>
      <p>
        <ul>
          Grâce à plus de 20 ans d'expérience, nous avons développé un réseau solide :
          <li>Des partenaires locaux pour le traitement des déchets véhicules.</li>
          <li>Des partenaires nationaux et internationaux afin de vous proposer à la vente un choix de véhicules juste et adaptés à vos besoins.</li>
        </ul>
      </p>
    </div>
  );

};

export default memo(HomeSection4);
