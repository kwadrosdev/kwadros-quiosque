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
      <span className="mainText">{mainText}</span>
      <span>{subText}</span>
    </InfoCardContainer>
  );
}

export default InfoCard;
