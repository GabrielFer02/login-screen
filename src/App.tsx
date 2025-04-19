import { Button } from './components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './components/ui/card';
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';
import { Separator } from './components/ui/separator';

function App() {
  return (
    <main className='h-screen flex w-full'>
      <div className='bg-primary-foreground w-full h-full flex p-16'></div>
      <section className='flex items-center justify-center bg-background h-full max-w-3xl w-full p-4'>
        <Card className='w-96'>
          <CardHeader>
            <CardTitle
              children='Entre com sua conta'
              className='text-2xl font-bold tracking-tighter'
            />
            <CardDescription children='Utilize seu e-mail e senha ou o Github para entrar.' />
          </CardHeader>
          <CardContent>
            <div>
              <Label htmlFor='email' children='E-mail' />
              <Input type='email' id='email' placeholder='exemplo@email.com' />
            </div>
            <div className='mt-16'>
              <Label htmlFor='password' children='Senha' />
              <Input type='password' placeholder='Senha' id='password' />
            </div>
            <Button children='Entrar' className='mt-6 w-full' />
            <div className='flex items-center gap-6'>
              <Separator>
                <span className='text-xs text-muted-foreground'>OU</span>
              </Separator>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}

export default App;
