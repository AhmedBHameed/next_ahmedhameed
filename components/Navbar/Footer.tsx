import {Typography, Link} from '@material-ui/core';
import styled from 'styled-components';
import {ReactComponent as Heart} from '../../public/heart.svg';
import nextI18next, {useTranslation, Trans} from '../../i18n';
import {GitHub, Email, LinkedIn} from '@material-ui/icons';
import {NextPage} from 'next';

const Container = styled.div`
  text-align: center;
  color: ${props => props.theme.colors.textColor};
`;

const HeartSvg = styled(Heart)`
  color: red;
  width: 1.5rem;
  height: 1.5rem;
  display: inline;
`;

const ParagraphText = styled(Typography)`
  font-size: 1.4rem;
`;

const OwnerName = styled.span`
  font-size: 1.4rem;
  color: ${props => props.theme.colors.focusColor};
`;

const SocialButtonWithIcons = styled(Link)`
  color: ${props => props.theme.colors.textColor};
  margin: 0.5rem;
  & svg {
    font-size: 2.4rem;
  }
`;

interface IconLinkProps {
  href: string;
}

const IconLinks: NextPage<IconLinkProps> = ({href, children}) => {
  return (
    <SocialButtonWithIcons target="_blank" href={href}>
      {children}
    </SocialButtonWithIcons>
  );
};

const Footer = () => {
  const {t} = useTranslation();
  return (
    <Container>
      <ParagraphText variant="caption" display="block" gutterBottom>
        <Trans i18nKey="footer.copyRight">
          © 2020 kakiee.at, All rights reserved.
          <br />
          Made with <HeartSvg /> by <OwnerName>Ahmed HAMEED</OwnerName>
        </Trans>
      </ParagraphText>
      <div>
        <IconLinks href="https://www.linkedin.com/in/ahmed-hameed-185b3612b/">
          <LinkedIn />
        </IconLinks>

        <IconLinks href="https://github.com/AhmedBHameed">
          <GitHub />
        </IconLinks>

        <IconLinks href="mailto:contact.kakiee@gmail.com">
          <Email />
        </IconLinks>
      </div>
    </Container>
  );
};

// Footer.getInitialProps = async () => ({
//   namespacesRequired: ['common', 'footer'],
// });

export default nextI18next.withTranslation('common')(Footer);
