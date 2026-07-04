# X-ray and SMBH Research


## Basic Information

This is the final project for the course "X-ray astronomy and SMBHs". 

In the project, I'll do some data analysis and write a short paper on the topic: Searching for the Missing Middle: X-ray Luminosity and Variability of the IMBH Candidate HLX-1

I'll use python's astroquery package to fetch data, and use Sherpa for modeling and fitting, use latex for paper-writing.

## Papers to Read

- [x] Intermediate-Mass Black Holes
authors: "Greene, J. E.; Strader, J.; Ho, L. C."
year: 2020
journal: "Annual Review of Astronomy and Astrophysics"
volume: 58
pages: "257-312"
doi: "10.1146/annurev-astro-032620-021835"
arxiv: "1911.09678"
purpose: "General review of IMBH searches, including dynamical searches, accretion signatures, dwarf galaxies, globular clusters, and the observational gap around $10^{2}-10^{5}$ solar masses."

- [x] Ultraluminous X-Ray Sources
authors: "Kaaret, P.; Feng, H.; Roberts, T. P."
year: 2017
journal: "Annual Review of Astronomy and Astrophysics"
volume: 55
pages: "303-341"
doi: "10.1146/annurev-astro-091916-055259"
arxiv: "1703.10728"
purpose: "Main review for ULXs. Explains why ULXs were once considered IMBH candidates, and why many are now interpreted as super-Eddington neutron stars or stellar-mass black holes."

- [ ] An Intermediate-mass Black Hole of Over 500 Solar Masses in the Galaxy ESO 243-49
authors: "Farrell, S. A.; Webb, N. A.; Barret, D.; Godet, O.; Rodrigues, J. M."
year: 2009
journal: "Nature"
volume: 460
issue: 7251
pages: "73-75"
doi: "10.1038/nature08083"
arxiv: "1001.0567"
purpose: "Discovery/claim paper for ESO 243-49 HLX-1 as one of the strongest IMBH candidates, based on its extreme X-ray luminosity."

- [ ] A Redshift for the Intermediate-mass Black Hole Candidate HLX-1: Confirmation of its Association with the Galaxy ESO 243-49
authors: "Wiersema, K.; Farrell, S. A.; Webb, N. A.; Servillat, M.; Maccarone, T. J.; Barret, D.; Godet, O."
year: 2010
journal: "The Astrophysical Journal Letters"
volume: 721
issue: 2
pages: "L102-L106"
doi: "10.1088/2041-8205/721/2/L102"
arxiv: "1008.4125"
purpose: "Confirms that HLX-1 is associated with ESO 243-49 through an optical redshift, making the huge inferred X-ray luminosity physically meaningful."

- [ ] X-ray Variability and Hardness of ESO 243-49 HLX-1: Clear Evidence for Spectral State Transitions
authors: "Servillat, M.; Farrell, S. A.; Lin, D.; Godet, O.; Barret, D.; Webb, N. A."
year: 2011
journal: "The Astrophysical Journal"
volume: 743
issue: 1
article_number: 6
doi: "10.1088/0004-637X/743/1/6"
arxiv: "1108.4405"
purpose: "Best template paper for your possible project. Uses Swift monitoring plus XMM-Newton/Chandra observations to study luminosity, hardness, variability, and spectral state transitions of HLX-1."

- [ ] The Cool Accretion Disk in ESO 243-49 HLX-1: Further Evidence of an Intermediate Mass Black Hole
authors: "Davis, S. W.; Narayan, R.; Zhu, Y.; Barret, D.; Farrell, S. A.; Godet, O.; Servillat, M.; Webb, N. A."
year: 2011
journal: "The Astrophysical Journal"
volume: 734
issue: 2
article_number: 111
doi: "10.1088/0004-637X/734/2/111"
arxiv: "1104.2614"
purpose: "Uses relativistic accretion-disk spectral fitting to argue that HLX-1 lies in the IMBH mass regime. Useful for the disk-temperature/mass argument."

- [ ] An Ultraluminous X-ray Source Powered by an Accreting Neutron Star
authors: "Bachetti, M.; Harrison, F. A.; Walton, D. J.; Grefenstette, B. W.; Chakrabarty, D.; Fuerst, F.; Barret, D.; Beloborodov, A.; Boggs, S. E.; Christensen, F. E.; Craig, W. W.; Fabian, A. C.; Hailey, C. J.; Hornschemeier, A.; Kaspi, V.; Kulkarni, S. R.; Maccarone, T.; Miller, J. M.; Rana, V.; Stern, D.; Tendulkar, S. P.; Tomsick, J.; Webb, N. A.; Zhang, W. W."
year: 2014
journal: "Nature"
volume: 514
pages: "202-204"
doi: "10.1038/nature13791"
arxiv: "1410.3590"
purpose: "Critical cautionary paper: shows that at least some ULXs are neutron stars, so high X-ray luminosity alone cannot prove an IMBH."

- [ ] The Most Extreme Ultraluminous X-ray Sources: Evidence for Intermediate-mass Black Holes?
authors: "Sutton, A. D.; Roberts, T. P.; Walton, D. J.; Gladstone, J. C.; Scott, A. E."
year: 2012
journal: "Monthly Notices of the Royal Astronomical Society"
volume: 423
issue: 2
pages: "1154-1177"
doi: "10.1111/j.1365-2966.2012.20944.x"
arxiv: "1203.4100"
purpose: "Comparison sample of extreme ULXs selected by high luminosity. Useful for comparing HLX-1 with other bright ULX/HLX candidates and for discussing the IMBH versus super-Eddington ambiguity."

The first two are review papers: Greene et al. 2020 is the IMBH big-picture review, and Kaaret et al. 2017 is the ULX/X-ray review. Greene et al. explicitly reviews IMBH searches over roughly $10^{2}–10^{5} M_{\odot}$, including both dynamical and accretion-based searches. Kaaret et al. reviews ULX observations and emphasizes both the evidence for IMBHs in ULXs and the super-Eddington/neutron-star interpretation.

The next four are the HLX-1 core papers. Farrell et al. reports HLX-1’s extreme luminosity, up to about $1.2×10^{42} \mathrm{erg/s}$, and argues for an IMBH interpretation. Wiersema et al. confirms HLX-1’s association with ESO 243-49 using an H$\alpha$ redshift, which is crucial because the luminosity estimate depends on distance. Servillat et al. is the most directly useful data-analysis template: Swift monitoring plus XMM/Chandra, hardness changes, luminosity changes, and state transitions. Davis et al. gives the accretion-disk spectral-fitting mass argument, with reported mass constraints in the IMBH regime.

The last two are the caution/comparison papers. Bachetti et al. shows that a ULX in M82 is powered by an accreting neutron star, so high luminosity alone is not enough to claim an IMBH. Sutton et al. studies extreme ULXs selected with $L_{X} > 5×10^{40} \mathrm{erg/s}$ within $100 \mathrm{Mpc}$ and explicitly frames the ambiguity between IMBHs and extreme super-Eddington stellar remnants.

## Notes from Papers

### Intermediate-Mass Black Holes: the Big Picture

We describe Intermediate Black Holes as bhs with mass from $100 \sim 10^{5} M_{\odot}$.

>  #### accretion signature
>
>  An **accretion signature** means an **observable clue that a black hole is actively swallowing gas**.

>  #### ULX and HLX
>
>  Ultra-luminous X-ray sources, or ULXs, are extremely bright X-ray point sources in other galaxies, but not located at the galaxy center. Very extreme ULXs above $10^{41}\ {\rm erg\ s^{-1}}$ are often called **hyper-luminous X-ray sources**, or HLXs.  

How could we form non-stellar-mass bhs?

1.  gravitational runaway: $10^{3} - 10^{4} M_{\odot}$ seeds
2.  collapse of Population III stars: $100 M_{\odot}$ seeds
3.  “direct collapse” into a bh: $10^{4} - 10^{6} M_{\odot}$ seeds

<img src="./X-ray%20and%20SMBH%20Research%20Note.assets/image-20260702210223165.png" alt="image-20260702210223165" style="zoom:50%;" />

#### Seeding Model

Pop III stars will likely leave bhs around $M_{\text{BH}} \sim 100 M_{\odot}$, excepting first stars in the mass range of $1 4 0-2 6 0 ~ M_{\odot}$ that would explode as pair-instability supernovae and leave no remnant. This model is challenged by bh growing.

Direct collapsing will leave bhs around $M_{BH} \sim 10^{4} - 10^{6} M_{\odot}$, but this channel can only operate at very high redshift. The number density of halos that suffer direct collapse is very uncertain.

Gravitational runaway will produce $M_{BH} \sim 10^{3} - 10^{4} M_{\odot}$ within a dense stellar cluster.

Theory predicts many possible IMBH populations, including nuclear and wandering black holes, but uncertainties in accretion, mergers, recoil, and occupation fraction make it difficult to use present-day demographics alone to identify the true seeding channel.

#### Stellar and Gas Dynamical Searches for IMBHs

If a black hole sits in a cluster or galaxy nucleus, nearby stars/gas should move faster or in a special pattern because of the black hole’s gravitational pull. If we can measure those motions precisely enough, we can infer the black-hole mass.

Mass–anisotropy degeneracy is the problem that “extra central mass” and “special stellar orbit directions” can produce similar observed stellar motions, making dynamical black-hole detections uncertain. Proper motions help because they turn a one-dimensional velocity measurement into a much more three-dimensional dynamical measurement, letting us separate “extra gravity” from “special orbit directions.”

<img src="./X-ray%20and%20SMBH%20Research%20Note.assets/image-20260703213104752.png" alt="image-20260703213104752" style="zoom:50%;" />

Current dynamical measurements or limits on black hole mass in low-mass stellar systems.

Seen from the image that dynamical evidence is very ambiguous at $M_{BH} \leq 10^{4}M_{\odot}$, highlighting the importance for HLXs.

#### Searches for Accreting IMBHs in Galaxy Nuclei

##### Optical Spectroscopic Selection

If an IMBH is sitting in a galaxy nucleus and accreting gas, it may behave like a scaled-down AGN. The accretion disk produces energetic radiation. That radiation ionizes surrounding gas. The gas then emits optical lines such as Hα, Hβ, [O III], [N II], [S II], etc. So astronomers look for AGN-like optical emission-line signatures in low-mass galaxies.

The method
$$
M_{\rm BH}=f_{\rm vir}\frac{r_{\rm BLR}\Delta V^2}{G}
$$

>  #### BPT Diagram
>
>  A **BPT diagram** is an optical emission-line diagnostic plot used to decide what is ionizing the gas in a galaxy: **young stars** or an **active black hole**.

Problem for BPT search: the AGNs become hopelessly intermingled with star-forming galaxies at low metallicity. 

**BPT selection**: uses optical line ratios like [O III]/Hβ and [N II]/Hα.

**He II λ4686 diagnostic**: uses the He II line, which requires high-energy photons, so people hoped it would reveal hard AGN radiation.

**Mid-infrared color cuts**: AGN often heat dust to high temperatures, giving red mid-IR colors, so this is used to find luminous AGNs.

The three methods merely give out overlaps. In low-mass, low-metallicity galaxies, many “classic AGN signs” stop being clean. Mid-IR red colors can be produced by young starbursts, not just AGN-heated dust. He II λ4686 can be powered by high-mass X-ray binaries. [O IV] can be excited by massive O stars and Wolf-Rayet stars. Even [Ne V], usually considered a strong AGN indicator because it needs very high ionization energy, can be produced by fast shocks from stellar winds or supernovae.

#### X-ray Observations Matters

High occupation is found in $M_{*} \sim 10^{9} - 10^{10} M_{\odot}$ galaxies, using the X-ray data.

### Ultraluminous X-Ray Sources: General Review for ULXs

