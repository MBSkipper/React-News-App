import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function NewsCard() {
    
    const news = [
    {
      "source": {
        "id": null,
        "name": "Gizmodo.com"
      },
      "author": "Mike Pearl",
      "title": "Bitcoin Mining is Being Used to Offset Heating Costs in Greenhouses and Homes",
      "description": "Of course, bitcoin critics would argue there is nothing truly gained here in terms of energy efficiency.",
      "url": "https://gizmodo.com/bitcoin-mining-is-being-used-to-offset-heating-costs-in-greenhouses-and-homes-2000708684",
      "urlToImage": "https://gizmodo.com/app/uploads/2026/01/btc-heat-1200x675.jpg",
      "publishedAt": "2026-01-11T21:10:17Z",
      "content": "One of the side effects of the energy-intensive process of bitcoin mining is the excess heat that is created by the involved hardware devices. Miners have to prove that theyve expended energy on comp… [+4666 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Gizmodo.com"
      },
      "author": "Kyle Torpey",
      "title": "Trump’s National Bitcoin Reserve Is Still in the Works. Some States Have Already Taken Action on Theirs",
      "description": "Arizona, New Hampshire, and Texas have enacted laws aimed at creating their own reserves.",
      "url": "https://gizmodo.com/trumps-national-bitcoin-reserve-is-still-in-the-works-some-states-have-already-taken-action-on-theirs-2000711467",
      "urlToImage": "https://gizmodo.com/app/uploads/2026/01/shutterstock_2708601327-1200x675.jpg",
      "publishedAt": "2026-01-18T10:00:56Z",
      "content": "During his 2024 U.S. presidential run, then-candidate Donald Trump promised to establish a strategic bitcoin reserve if he was elected for his second term in office after losing his reelection bid in… [+4591 chars]"
    },
    {
      "source": {
        "id": "the-verge",
        "name": "The Verge"
      },
      "author": "Emma Roth",
      "title": "Two cybersecurity employees plead guilty to carrying out ransomware attacks",
      "description": "Two former employees at cybersecurity firms - one of whom was a ransomware negotiator - have pleaded guilty to carrying out a series of ransomware attacks in 2023. The Department of Justice announced the guilty pleas on Tuesday, saying 40-year-old Ryan Goldbe…",
      "url": "https://www.theverge.com/news/851467/cybersecurity-employees-plead-guilty-alphv-blackcat-ransomware",
      "urlToImage": "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/23318435/akrales_220309_4977_0232.jpg?quality=90&strip=all&crop=0%2C10.732984293194%2C100%2C78.534031413613&w=1200",
      "publishedAt": "2025-12-30T18:32:27Z",
      "content": "\u003Cul\u003E\u003Cli\u003E\u003C/li\u003E\u003Cli\u003E\u003C/li\u003E\u003Cli\u003E\u003C/li\u003E\u003C/ul\u003E\r\nThe pair targeted several companies with ALPHV / BlackCat ransomware and extorted $1.2 million in Bitcoin.\r\nThe pair targeted several companies with ALPHV / Blac… [+3197 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Gizmodo.com"
      },
      "author": "Kyle Torpey",
      "title": "The Disclosure of Aliens Could Cause a Bitcoin Rush, Former Bank of England Analyst Says",
      "description": "She warned of \"extreme price volatility in financial markets due to catastrophising or euphoria, and a collapse in confidence.\"",
      "url": "https://gizmodo.com/the-disclosure-of-aliens-could-cause-a-bitcoin-rush-former-bank-of-england-analyst-says-2000711471",
      "urlToImage": "https://gizmodo.com/app/uploads/2026/01/pentagon-uap-ufo-1200x675.jpg",
      "publishedAt": "2026-01-18T18:22:11Z",
      "content": "According to the Sunday Times, a former analyst at the Bank of England (BoE), which is the central bank of the United Kingdom, has written to the banks governor, Andrew Bailey, regarding the need to … [+4039 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Gizmodo.com"
      },
      "author": "Mike Pearl",
      "title": "Free Bitcoin Glitch Fixed When ‘Decentralized’ Crypto Exchange Uses Centralized Rollback",
      "description": "Situations that expose centralization in supposedly decentralized exchanges have become par for the course in crypto.",
      "url": "https://gizmodo.com/free-bitcoin-glitch-fixed-when-decentralized-crypto-exchange-uses-centralized-rollback-2000711734",
      "urlToImage": "https://gizmodo.com/app/uploads/2025/10/gizmodo-social-1200x675-1.jpg",
      "publishedAt": "2026-01-19T20:15:34Z",
      "content": "Paradex, which is a decentralized crypto exchange (DEX) built as an appchain on top of Ethereum layer-two network Starknet, recently experienced a technical glitch that resulted in bitcoin being pric… [+3904 chars]"
        },
        {
      "source": {
        "id": null,
        "name": "Gizmodo.com"
      },
      "author": "Kyle Torpey",
      "title": "Privacy Coin Zcash Drops 20% as Core Dev Team Departs Electric Coin Company",
      "description": "The fears of centralizing forces in crypto are creating a lot of skittishness.",
      "url": "https://gizmodo.com/privacy-coin-zcash-drops-20-as-core-dev-team-departs-electric-coin-company-2000707755",
      "urlToImage": "https://gizmodo.com/app/uploads/2026/01/zcash-1200x675.jpg",
      "publishedAt": "2026-01-08T21:10:40Z",
      "content": "Zcash, a privacy-focused cryptocurrency based around the use of zero-knowledge proofs, saw its price fall more than 20% overnight following the abrupt resignation of its entire core development team … [+4520 chars]"
    }]

    return (
        <Container>
            <Row>
                {news.map((singleNews, index) => (
                    <Col className='my-2'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img 
                                variant="top" 
                                src={singleNews.urlToImage} 
                                style={{ height: '160px'}}
                            />
                                <Card.Body>
                                    <Card.Title
                                        style={{ minHeight: '96px', }}
                                        >{singleNews.title}</Card.Title>
                                    <Card.Text
                                        style={{ minHeight: '120px'}}
                                    >
                                        {singleNews.description.length < 150  
                                        ? singleNews.description
                                    :`${singleNews.description.slice(0, 150)}...`
                                    }
                                    </Card.Text>
                                    <a 
                                        className="btn btn-info w-100" 
                                        href={singleNews.url}
                                        target="_blank"
                                        >Read full article
                                    </a>

                                </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default NewsCard;