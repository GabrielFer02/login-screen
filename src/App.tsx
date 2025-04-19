import { Button } from './components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './components/ui/carousel';
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import gymAmico from './assets/Gym-amico.svg';
import gymBro from './assets/Gym-bro.svg';

function App() {
  return (
    <main className='h-screen flex w-full font-primary'>
      <div className='bg-primary-foreground w-full h-full flex items-center justify-center p-16'>
        <Carousel className='w-full max-w-xl'>
          <CarouselContent>
            <CarouselItem>
              <div className='flex aspect-square'>
              <a href="https://storyset.com/sport" className='hidden'>Sport illustrations by Storyset</a>
                <img src={gymAmico} alt='' />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className='flex aspect-square'>
              <a href="https://storyset.com/sport" className='hidden'>Sport illustrations by Storyset</a>
                <img src={gymBro} alt='' />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <section className='flex items-center justify-center bg-background h-full max-w-3xl w-full p-4'>
        <Card className='w-full max-w-md'>
          <CardHeader>
            <CardTitle
              children='Entre com sua conta'
              className='text-2xl font-bold tracking-tighter text-center'
            />
            <CardDescription
              children='Utilize seu e-mail e senha ou o Github para entrar.'
              className='text-center'
            />
          </CardHeader>
          <CardContent>
            <div>
              <Label htmlFor='email' children='E-mail' className='mb-1' />
              <Input type='email' id='email' placeholder='exemplo@email.com' />
            </div>
            <div className='mt-16'>
              <Label htmlFor='password' children='Senha' className='mb-1' />
              <Input
                type='password'
                placeholder='credenciais secretas'
                id='password'
              />
            </div>
            <Button children='Entrar' className='mt-6 w-full' />
            <div className='flex items-center justify-center text-xs text-muted-foreground mt-4'>
              OU
            </div>
            <Button className='mt-4 w-full' variant={'outline'}>
              <GitHubLogoIcon /> Entrar com o Github
            </Button>
          </CardContent>
          <CardFooter>
            <p className='text-muted-foreground text-center text-sm'>
              Ao entrar em nossa plataforma você concorda com nossos Termos de
              Uso e Política de Privacidade
            </p>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
}

export default App;
