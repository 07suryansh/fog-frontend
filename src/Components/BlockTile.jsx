import './BlockTile.css'

export default function BlockTile(props) {
  return (
    <div className='block-tile'>
        <div className="block-text">{props.tileName}</div>
        <div className="block-text">{props.tileValue}</div>
    </div>
  )
}
