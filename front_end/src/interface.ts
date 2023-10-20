interface Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export default Movie

/*
{
    adult: false,
    backdrop_path: '/628Dep6AxEtDxjZoGP78TsOxYbK.jpg',
    genre_ids: [ 28, 53 ],
    id: 575264,
    original_language: 'en',
    original_title: 'Mission: Impossible - Dead Reckoning Part One',
    overview: '모든 인류를 위협할 새로운 무기를 추적하게 된 에단 헌트와 IMF팀은 이 무기 
가 인류의 미래를 통제할 수 있다는 사실을 알게 된다. 전 세계가 위태로운 상황에 처한 가운 
데, 이를 추적하던 에단 헌트에게 어둠의 세력까지 접근하고 마침내 미스터리하고 강력한 빌런
과 마주하게 된 그는 가장 위험한 작전을 앞두고 자신이 아끼는 사람들의 생명과 중요한 임무 
사이에서 선택을 해야 하는 상황에 놓이게 되는데…',
    popularity: 1937.188,
    poster_path: '/nQsWPG020kSWdOl3EhFXRNE2s0n.jpg',
    release_date: '2023-07-08',
    title: '미션 임파서블: 데드 레코닝 PART ONE',
    video: false,
    vote_average: 7.7,
    vote_count: 1689
  },

/ 이미지 출력 양식
https://www.themoviedb.org/t/p/w600_and_h900_bestv2${poster_path}
*/