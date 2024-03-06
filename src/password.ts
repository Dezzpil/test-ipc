import { hash as bhash } from 'bcrypt';
export async function hash(password: string): Promise<string> {
  return await bhash(password, 10)
}


(async () => {
console.log(await hash('foobar'));
})();