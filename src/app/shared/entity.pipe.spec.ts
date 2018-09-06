import { EntityPipe } from './entity.pipe';

describe('EntityPipe', () => {
  const pipe = new EntityPipe();
  it('transforms entities to html', () => {
   expect(pipe.transform('&#91;title&#93; &#96;title&#96; &#60;title&#62; Difference between $object-&gt;lol and $object-&gt;$lol')).toBe('[title] `title` <title> Difference between $object->lol and $object->$lol');
 });
});
