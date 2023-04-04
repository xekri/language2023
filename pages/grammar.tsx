import { Section } from '../components/section';
import { dict, ipa, notAllowed, translate } from '../lib/dict';
import { Page } from '../components/page';

console.debug(translate(`I DO CAUSE THAT THOU _LANGUAGE DO KNOW`))

const TranslateRuby = props => <span>{
  props.datum
    .split(/(?<=[_A-Z])(?=[^_A-Z])|(?<=[^_A-Z])(?=[_A-Z])/g)
    .map(it => /[_A-Z]+/.test(it) ? <ruby>{translate(it)}<rt>{it}</rt></ruby> : it)
}</span>

const Sample = props => <table>{
  props.data.map(([type, eng, l]) =>
    <tr>
      <th>{type}</th>
      <td>{eng}</td>
      <td><TranslateRuby datum={l} /></td>
      <td>[{ipa(translate(l))}]</td>
    </tr>
  )
}</table>

export default () => <Page title='grammar'>
  <p>english in this article <em>have</em> no article, personal conjugation, or number.</p>
  <Section title='grapheme'>
    <div className='tables'>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>velar</th>
            <th>retroflex</th>
            <th>dental</th>
            <th>labial</th>
          </tr>
        </thead>
        <tr>
          <th>nasal</th>
          <td>g [ŋ]</td>
          <td></td>
          <td>n</td>
          <td>m</td>
        </tr>
        <tr>
          <th>voiced plosive</th>
          <td>c [g,ɣ]</td>
          <td></td>
          <td>d</td>
          <td>b</td>
        </tr>
        <tr>
          <th>unvoiced plosive</th>
          <td>q [k]</td>
          <td>k [tɕ,tʂ]</td>
          <td>t</td>
          <td>p</td>
        </tr>
        <tr>
          <th>unvoiced fricative</th>
          <td>h [h,x]</td>
          <td>x [ɕ,ʂ]</td>
          <td>s</td>
          <td>f</td>
        </tr>
        <tr>
          <th>voiced fricative</th>
          <td></td>
          <td>j [ʑ,ʐ]</td>
          <td>z</td>
          <td>v [v,β,w]</td>
        </tr>
        <tr>
          <th>approximant</th>
          <td></td>
          <td>l [ɾ,l]</td>
          <td></td>
          <td></td>
        </tr>
      </table>

      <table>
        <thead>
          <tr>
            <th></th>
            <th>front unround</th>
            <th>front round</th>
            <th></th>
            <th>back</th>
          </tr>
        </thead>
        <tr>
          <th>closed</th>
          <td>i</td>
          <td>y</td>
          <td>w [ɨ,ə]</td>
          <td>u</td>
        </tr>

        <tr>
          <th></th>
          <td>e</td>
          <td>ø</td>
          <td></td>
          <td>o</td>
        </tr>

        <tr>
          <th>open</th>
          <td></td>
          <td></td>
          <td>a</td>
          <td></td>
        </tr>
      </table>
    </div>

    <p>forbidden sequence</p>
    <ul>{
      notAllowed.map(x => <li>{x}</li>)
    }</ul>
  </Section>

  <Section title='syntax'>
    <p>any sentrence have <dfn>verb</dfn>.</p>
    <Sample data={[
      [
        'verb',
        'S is me',
        'DO I',
      ],
      [
        'verb',
        'S is true',
        'DO TRUE',
      ],
      [
        'verb',
        'S give O',
        'DO GIVE',
      ],
    ]} />

    <p>remove word <TranslateRuby datum='DO' /> from verb to get <dfn>noun</dfn>.</p>
    <Sample data={[
      [
        'noun',
        'i',
        'I',
      ],
      [
        'noun',
        'truth',
        'TRUE',
      ],
      [
        'noun',
        'giver',
        'GIVE',
      ],
    ]} />

    <p>order of words and <dfn>postnouns</dfn> tell <dfn>case</dfn> of noun in <dfn>sentence</dfn>.
      <br />without postnoun, noun before verb is <dfn>subject</dfn> and after verb is <dfn>object</dfn>.</p>

    <p>[…] is optional.</p>
    <Sample data={[
      [
        'sentence',
        '(sth) give (sth)',
        'DO GIVE',
      ],
      [
        'sentence',
        'i give (sth)',
        'I [DER] DO GIVE',
      ],
      [
        'sentence',
        'i give (sth)',
        'DO GIVE I DER',
      ],
      [
        'sentence',
        '(sth) give truth',
        'DO GIVE TRUE [DEN]',
      ],
      [
        'sentence',
        '(sth) give truth',
        'TRUE DEN DO GIVE',
      ],
      [
        'sentence',
        'i give truth',
        'I [DER] TRUE [DEN] DO GIVE',
      ],
      [
        'sentence',
        'i give truth',
        'I [DER] DO GIVE TRUE [DEN]',
      ],
      [
        'sentence',
        'truth, i give',
        'TRUE DEN I [DER] DO GIVE',
      ],
      [
        'sentence',
        'truth, i give',
        'DO GIVE TRUE [DEN] I [DER]',
      ],
    ]} />

    <p>turn sentence into verb, which is <dfn>clause</dfn>.
      <br />in clause, verb must come last.</p>
    <Sample data={[
      [
        'noun',
        'what give truth',
        'WHAT [DER] TRUE [DEN] DO GIVE',
      ],
      [
        'noun',
        'what i give',
        'WHAT DEN I [DER] DO GIVE',
      ],
      [
        'sentence',
        'what i give is true',
        'WHAT DEN I [DER] DO GIVE DO TRUE',
      ],
      [
        'verb',
        'S is that (sth) give (sth)',
        'DO THAT DO GIVE',
      ],
    ]} />

    <p>quote foreign word.</p>
    <Sample data={[
      [
        'verb',
        'S is string ‘sumi’ meaning O',
        'DO _QUOTE sumi [_QUOTE]',
      ],
      [
        'sentence',
        '‘sumi’ means me',
        'DO _QUOTE sumi _QUOTE I',
      ],
    ]} />


    <p>add noun which is neither S nor O.</p>
    <Sample data={[
      [
        'noun',
        'thou',
        'THOU',
      ],
      [
        'sentence',
        'i give (sth) in relation to thee',
        'I [DER] THOU ABOUT DO GIVE',
      ],
      [
        'sentence',
        'i give (sth) to thee (= with thee being taker)',
        'I [DER] THOU AS TAKE DO GIVE',
      ],
    ]} />

    <p>(miscellaneous)</p>
    <Sample data={[
      [
        'sentence',
        'i am in japan',
        `I [DER] DO IN _QUOTE 'J' 'P' _QUOTE OF NATION [DEN]`,
      ],
      [
        'sentence',
        'colorless green ideas sleep furiously',
        `SO_MUCH ZERO COLOUR AND GREEN AND _SWAP THINK DO FIGURATIVE ANGER OF NOT WAKE`,
      ],
    ]} />
  </Section >
</Page>