import { Image, NotFoundSection, NotFoundText } from "./client/styles";

function NotFoundPage() {
  return (
    <NotFoundSection
    >
      <Image 
        src="https://play-lh.googleusercontent.com/i-0HlK6I-K5ZVI28HFa4iXz0T22Mg2WjQ4gMsEYvqmSNdifp2NE41ZiaUCavmbIimQ=w600-h300-pc0xffffff-pd"
      />
      <NotFoundText>Lo sentimos, pagina no encontrada</NotFoundText>
    </NotFoundSection>
  )
}

export default NotFoundPage;
