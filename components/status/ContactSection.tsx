import Link from 'next/link'
import { ContactCard } from './ContactCard'
import { Card } from '../ui/card'

export const ContactSection = () => {
    return (
        <Card className='p-4 flex-1 flex flex-col gap-4'>
            <h1 className="scroll-m-20 text-md font-extrabold tracking-tight lg:text-lg">
                Contactez-moi
            </h1>
            <Link href="mailto:contact.kd.webdesign@gmail.com">
                <ContactCard
                    name='KD Web Design'
                    description='contact.kd.webdesign@gmail.com'
                    mediumImage='https://static.vecteezy.com/ti/vecteur-libre/p3/13948544-logo-gmail-sur-fond-blanc-transparent-gratuit-vectoriel.jpg'
                />
            </Link>
            <Link href="https://www.linkedin.com/in/kd-web-design-64b496315/" target='_blank'>
                <ContactCard
                    name='KD Web Design'
                    description='KD-Web-Design'
                    mediumImage='https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1200px-LinkedIn_icon.svg.png'
                />
            </Link>
        </Card>
    );
}
