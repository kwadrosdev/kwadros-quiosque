import { InfoCardContainer } from './styles';

interface InfoCardInterface {
  icon: any;
  mainText: string;
  subText: string;
}

function InfoCard({ icon, mainText, subText }: InfoCardInterface) {
  return (
    <InfoCardContainer>
      {icon}
      <h5>{mainText}</h5>
      <span>{subText}</span>
    </InfoCardContainer>
  );
}

export default InfoCard;
