import React, { useEffect, useRef } from 'react';
import Poem from '../Poem/Poem';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setPoems } from '../../store/actions';
import { setLoading, setCompleted } from '../../store/actions/status';

const dummy = [
  {
    _id: '5e3c8bd1f2e399daf4a416ca',
    title: 'a-place-at-the-table',
    category: 'war',
    body:
      '<p>A cheerful man was Charlie Reeve </br>Tap-tapping at his cobbler’s last </br>And whistling merry tunes he learned </br>In days long past. </br></p><p> </br>Five strapping sons had Charlie Reeve, </br>Called Charlie, and Leslie, Bob and Ron </br>And one whose name they never say </br>These ten years gone. </br></p><p> </br>One lovely girl had Charlie Reeve </br>With golden hair and dainty waist </br>A face to launch a thousand ships </br>In fev’rish haste. </br></p><p> </br>Sit round the table dears </br>While mother fills each steaming plate </br>And then she may not see the place </br>That made us eight. </br></p><p> </br>And as you wrap my mended shoes </br>And show my mother to the door </br>I wish God could give back the one </br>Who went to War. </br></p>'
  },
  {
    _id: '5e3c8bd1f2e399daf4a416d3',
    title: 'in-memoriam-jack-titshall',
    category: 'war',
    body:
      '<p>“Jack Titshalls turn ”, said Sergeant Brown </br>“To take the air test”, fetch him Geoff. </br>But when I told him he must fly </br>Jack Titshall turned as pale as death. </br></p><p> </br>“What ails thee lad?, said Sergeant Brown </br>The ground tests fine, you’ll be all right.” </br>“It breaks my dream, that’s all, said Jack. </br>My mother called me in the night”. </br></p><p> </br>She said she’s see me soon, quite soon </br>And not to fear she’d stretch her hand </br>To free me from the burning plane </br>And take me to the Promised Land. </br></p><p> </br>“Pilot to base, air test complete” </br>“Then back you come”, the tower called. </br>But as he lowered flaps and wheels </br>The stresses rose, the aircraft stalled. </br></p><p> </br>We watched the fire engines race </br>Towards that wall of fire and flame </br>And Sergeant Brown said “Steady lads </br>Let’s hope to God his mother came”. </br></p>'
  },
  {
    _id: '5e3c8bd1f2e399daf4a416da',
    title: 'the-blind-veteran',
    category: 'war',
    body:
      '<p>Speedwell blue upon the Down’s </br>Buttercups and plantain crowns </br>And daisies pied upon the hill </br>I wonder if you bloom there still. </br></p><p> </br>In my youth I left the town </br>And wondered daily on the down </br>I took delight in Nature’s store </br>I’ll never see her bounty more. </br></p><p> </br>Blind, I feel my way along </br>The paths I made, when I was young </br>And feel the springy turf I knew </br>When first I saw the speedwell Blue. </br></p><p> </br>In my darkness still I see </br>A giant red tailed bumble bee </br>With heavy body droning over </br>To sip the nectar from the clover. </br></p><p> </br>Nature’s beauties round me press </br>Kaleidoscopic loveliness, </br>With these pictures in my mind </br>What matters if I am blind. </br></p>'
  }
];

const PoemCollection: React.FC = () => {
  const { cat, title } = useParams();

  const dispatch = useDispatch();
  const poemCollection = useSelector((state: any) => state.poems);
  const loading = useSelector((state: any) => state.loading);

  const url = cat !== undefined ? `poems/category/${cat}` : `poems/title/${title}`;

  useEffect(() => {
    dispatch(setLoading());
    fetch(`/${url}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(res => {
        dispatch(setPoems(res));
      })
      .then(() => dispatch(setLoading()))
      .catch(e => {
        console.log(e);
      });
  }, [dispatch, url]);

  let poems;

  if (!loading && Object.entries(poemCollection).length > 0) {
    const mappedPoems = poemCollection.map((poem: any) => {
      return <Poem key={poem._id} poem={poem} />;
    });
    poems = mappedPoems;
  }

  return <div>{poems}</div>;
};

export default PoemCollection;
