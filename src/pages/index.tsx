import * as React from "react";
import { FunctionComponent, useState, useCallback } from "react";
import {
  Autocomplete,
  TextField,
  Icon,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { navigate } from "gatsby";
import Col1 from "../components/col1";
import MatterhornPopup from "../components/matterhorn-popup";
import PortalPopup from "../components/portal-popup";
import * as styles from "./index.module.css";

const ResultsPage: FunctionComponent = () => {
  const [dateFieldDateTimePickerValue, setDateFieldDateTimePickerValue] =
    useState<string | null>(null);
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);
  const [isMatterhornPopup1Open, setMatterhornPopup1Open] = useState(false);
  const [isMatterhornPopup2Open, setMatterhornPopup2Open] = useState(false);
  const [isMatterhornPopup3Open, setMatterhornPopup3Open] = useState(false);

  const onCol1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='footerSectionContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFickleflightLogoClick = useCallback(() => {
    navigate("/homepage");
  }, []);

  const onExploreTextClick = useCallback(() => {
    navigate("/homepage");
  }, []);

  const onHotelsTextClick = useCallback(() => {
    navigate("/hotels-page");
  }, []);

  const onHotelClick = useCallback(() => {
    navigate("/");
  }, []);

  const onCol3Click = useCallback(() => {
    navigate("/");
  }, []);

  const onCol4Click = useCallback(() => {
    window.open("https://www.bing.com/");
  }, []);

  const onViewAllStaysButtonClick = useCallback(() => {
    navigate("/hotels-page");
  }, []);

  const openMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(true);
  }, []);

  const closeMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(false);
  }, []);

  const openMatterhornPopup1 = useCallback(() => {
    setMatterhornPopup1Open(true);
  }, []);

  const closeMatterhornPopup1 = useCallback(() => {
    setMatterhornPopup1Open(false);
  }, []);

  const openMatterhornPopup2 = useCallback(() => {
    setMatterhornPopup2Open(true);
  }, []);

  const closeMatterhornPopup2 = useCallback(() => {
    setMatterhornPopup2Open(false);
  }, []);

  const openMatterhornPopup3 = useCallback(() => {
    setMatterhornPopup3Open(true);
  }, []);

  const closeMatterhornPopup3 = useCallback(() => {
    setMatterhornPopup3Open(false);
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <>
        <div className={styles.resultsPage}>
          <header className={styles.topHeader}>
            <div className={styles.topContainer}>
              <button
                className={styles.fickleflightLogo}
                onClick={onFickleflightLogoClick}
              >
                <img
                  className={styles.symbolsIcon}
                  alt=""
                  src="../symbols.svg"
                />
              </button>
              <div className={styles.navigationRight}>
                <div className={styles.navigationMenu}>
                  <div className={styles.explore} onClick={onExploreTextClick}>
                    Explore
                  </div>
                  <button className={styles.search}>Search</button>
                  <div className={styles.explore} onClick={onHotelsTextClick}>
                    Hotels
                  </div>
                  <button className={styles.offers}>Offers</button>
                </div>
                <div className={styles.accountSection}>
                  <img
                    className={styles.hamburgerMenuIcon}
                    alt=""
                    src="../notification.svg"
                  />
                  <img
                    className={styles.notificationBellIcon}
                    alt=""
                    src="../notification1.svg"
                  />
                  <img
                    className={styles.unsplashd1upkifd04aIcon}
                    alt=""
                    src="../top_avatar@2x.png"
                  />
                </div>
              </div>
            </div>
          </header>
          <div className={styles.searchFormSection}>
            <div className={styles.searchContainer}>
              <div className={styles.bannerGradient} />
              <img
                className={styles.bannerBackgroundIcon}
                alt=""
                src="../banner-background@2x.png"
              />
              <div className={styles.searchSection}>
                <div className={styles.title}>
                  <div className={styles.whereAreYou}>
                    Where are you off too?
                  </div>
                </div>
                <div className={styles.searchForm}>
                  <div className={styles.inputsRow}>
                    <div className={styles.inputGroup}>
                      <Autocomplete
                        className={styles.departureField}
                        disablePortal
                        options={[
                          "Singapore (SIN)",
                          "Sydney (SYD)",
                          "Siem Reap (REP)",
                          "Shanghai (PVG)Sanya (SYX)",
                        ]}
                        renderInput={(params: any) => (
                          <TextField
                            {...params}
                            color="primary"
                            label="Departure"
                            variant="outlined"
                            placeholder=""
                            helperText=""
                          />
                        )}
                        defaultValue="Singapore -  Changi (SIN)"
                        size="medium"
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <Autocomplete
                        className={styles.departureField}
                        sx={{ width: "100%" }}
                        disablePortal
                        options={[
                          "Clark (CRK)",
                          "Launceston (LST)",
                          "Kalibo (KLO)",
                          "Colombo CMB",
                          "Melbourne (AVV)",
                          "Los Angeles (LA)",
                        ]}
                        renderInput={(params: any) => (
                          <TextField
                            {...params}
                            color="primary"
                            label="Arrival"
                            variant="outlined"
                            placeholder=""
                            helperText=""
                          />
                        )}
                        defaultValue="Los Angeles (LA)"
                        size="medium"
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <div className={styles.departureField}>
                        <DatePicker
                          label="Date"
                          value={dateFieldDateTimePickerValue}
                          onChange={(newValue: any) => {
                            setDateFieldDateTimePickerValue(newValue);
                          }}
                          renderInput={(params: any) => (
                            <TextField
                              {...params}
                              color="primary"
                              variant="outlined"
                              size="medium"
                              renderInput={{ placeholder: "01/05/2022" }}
                              helperText=""
                              fullWidth
                            />
                          )}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.buttonGroup}>
                    <button className={styles.searchFlightsButton}>
                      <div className={styles.button}>Search flights</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.searchResults}>
            <div className={styles.searchFilters}>
              <div className={styles.resultsSummary}>
                <div className={styles.resultsParent}>
                  <div className={styles.results}>10 out of 177 Results</div>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="../vector-2.svg"
                  />
                </div>
              </div>
              <div className={styles.stops}>
                <b className={styles.results1}>Stops</b>
                <FormControlLabel
                  className={styles.component1formcheckbox}
                  label="1 Stop"
                  labelPlacement="end"
                  control={<Checkbox size="medium" />}
                />
                <FormControlLabel
                  className={styles.component1formcheckbox1}
                  label="2 Stops"
                  labelPlacement="end"
                  control={<Checkbox size="medium" />}
                />
              </div>
              <div className={styles.bookingOptions}>
                <b className={styles.results2}>Booking Options</b>
                <FormControlLabel
                  className={styles.component1formcheckbox}
                  label="Book on Fickleflight"
                  labelPlacement="end"
                  control={<Checkbox size="medium" />}
                />
                <FormControlLabel
                  className={styles.component1formcheckbox1}
                  label="Official Airline Websites"
                  labelPlacement="end"
                  control={<Checkbox size="medium" />}
                />
              </div>
              <div className={styles.flightExperience}>
                <b className={styles.results3}>Flight Experience</b>
                <FormControlLabel
                  className={styles.component1formcheckbox}
                  label="No overnight flights"
                  labelPlacement="end"
                  control={<Checkbox color="primary" size="medium" />}
                />
                <FormControlLabel
                  className={styles.component1formcheckbox1}
                  label="No long stop-overs"
                  labelPlacement="end"
                  control={<Checkbox color="primary" size="medium" />}
                />
              </div>
              <img className={styles.frameChild} alt="" src="../vector-2.svg" />
              <div className={styles.airlines}>
                <b className={styles.results4}>Airlines</b>
                <FormControlLabel
                  className={styles.component1formcheckbox}
                  label="Singapore Airlines"
                  labelPlacement="end"
                  control={<Checkbox color="primary" size="medium" />}
                />
                <FormControlLabel
                  className={styles.component1formcheckbox1}
                  label="Qatar Airways"
                  labelPlacement="end"
                  control={<Checkbox color="primary" size="medium" />}
                />
              </div>
            </div>
            <div className={styles.resultsSection}>
              <div className={styles.flightCards}>
                <div className={styles.results5}>10 out of 177 Results</div>
                <div className={styles.flightCard}>
                  <div className={styles.airlineSection}>
                    <img
                      className={styles.turkishIcon}
                      alt=""
                      src="../turkish.svg"
                    />
                    <div className={styles.singaporeAirlines}>
                      Turkish Airlines
                    </div>
                  </div>
                  <div className={styles.flightDetailsSection}>
                    <div className={styles.departureDetails}>
                      <div className={styles.am}>11:35 PM</div>
                      <div className={styles.sin}>SIN</div>
                    </div>
                    <div className={styles.flightduration}>
                      <img
                        className={styles.flighticon}
                        alt=""
                        src="../flighticon.svg"
                      />
                      <div className={styles.h55mNonStop}>33H 10M, 1-stop</div>
                    </div>
                    <div className={styles.arrivalDetails}>
                      <div className={styles.am}>4:45 PM</div>
                      <div className={styles.sin1}>LAX</div>
                    </div>
                  </div>
                  <div className={styles.priceSection}>
                    <img
                      className={styles.priceSectionChild}
                      alt=""
                      src="../vector-1.svg"
                    />
                    <b className={styles.s730}>S$ 723</b>
                  </div>
                </div>
                <div className={styles.flightCard}>
                  <div className={styles.airlineSection}>
                    <img
                      className={styles.turkishIcon}
                      alt=""
                      src="../sia.svg"
                    />
                    <div className={styles.singaporeAirlines}>
                      Singapore Airlines
                    </div>
                  </div>
                  <div className={styles.flightDetailsSection}>
                    <div className={styles.departureDetails}>
                      <div className={styles.am}>8:45 PM</div>
                      <div className={styles.sin}>SIN</div>
                    </div>
                    <div className={styles.flightduration1}>
                      <img
                        className={styles.flighticon1}
                        alt=""
                        src="../flighticon.svg"
                      />
                      <div className={styles.h55mNonStop}>15H 10M, 2-stops</div>
                    </div>
                    <div className={styles.arrivalDetails}>
                      <div className={styles.am}>7:55 PM</div>
                      <div className={styles.sin1}>LAX</div>
                    </div>
                  </div>
                  <div className={styles.priceSection}>
                    <img
                      className={styles.priceSectionChild}
                      alt=""
                      src="../vector-1.svg"
                    />
                    <b className={styles.s730}>S$ 900</b>
                  </div>
                </div>
                <div className={styles.flightCard}>
                  <div className={styles.airlineSection}>
                    <img
                      className={styles.japanIcon}
                      alt=""
                      src="../japan.svg"
                    />
                    <div className={styles.singaporeAirlines}>
                      Japan Airlines
                    </div>
                  </div>
                  <div className={styles.flightDetailsSection}>
                    <div className={styles.departureDetails}>
                      <div className={styles.am}>8:20 PM</div>
                      <div className={styles.sin}>SIN</div>
                    </div>
                    <div className={styles.flightduration}>
                      <img
                        className={styles.flighticon}
                        alt=""
                        src="../flighticon.svg"
                      />
                      <div className={styles.h55mNonStop}>17H 30M, 1-stop</div>
                    </div>
                    <div className={styles.arrivalDetails}>
                      <div className={styles.am}>9:50 PM</div>
                      <div className={styles.sin1}>LAX</div>
                    </div>
                  </div>
                  <div className={styles.priceSection}>
                    <img
                      className={styles.priceSectionChild}
                      alt=""
                      src="../vector-1.svg"
                    />
                    <b className={styles.s730}>S$ 859</b>
                  </div>
                </div>
                <div className={styles.flightCard}>
                  <div className={styles.airlineSection}>
                    <img className={styles.japanIcon} alt="" src="../ana.svg" />
                    <div className={styles.singaporeAirlines}>ANA</div>
                  </div>
                  <div className={styles.flightDetailsSection}>
                    <div className={styles.departureDetails}>
                      <div className={styles.am}>6:35 PM</div>
                      <div className={styles.sin}>SIN</div>
                    </div>
                    <div className={styles.flightduration}>
                      <img
                        className={styles.flighticon}
                        alt=""
                        src="../flighticon3.svg"
                      />
                      <div className={styles.h55mNonStop}>19H 15M, 1-stop</div>
                    </div>
                    <div className={styles.arrivalDetails}>
                      <div className={styles.am}>9:50 PM</div>
                      <div className={styles.sin1}>LAX</div>
                    </div>
                  </div>
                  <div className={styles.priceSection}>
                    <img
                      className={styles.priceSectionChild}
                      alt=""
                      src="../vector-1.svg"
                    />
                    <b className={styles.s730}>S$ 936</b>
                  </div>
                </div>
                <div className={styles.flightCard}>
                  <div className={styles.airlineSection}>
                    <img
                      className={styles.americanAirlinesIcon}
                      alt=""
                      src="../americanairlines.svg"
                    />
                    <div className={styles.singaporeAirlines}>
                      American Airlines
                    </div>
                  </div>
                  <div className={styles.flightDetailsSection}>
                    <div className={styles.departureDetails}>
                      <div className={styles.am}>8:20 PM</div>
                      <div className={styles.sin}>SIN</div>
                    </div>
                    <div className={styles.flightduration}>
                      <img
                        className={styles.flighticon}
                        alt=""
                        src="../flighticon3.svg"
                      />
                      <div className={styles.h55mNonStop}>17H 30M, 1-stop</div>
                    </div>
                    <div className={styles.arrivalDetails}>
                      <div className={styles.am}>9:50 PM</div>
                      <div className={styles.sin1}>LAX</div>
                    </div>
                  </div>
                  <div className={styles.priceSection}>
                    <img
                      className={styles.priceSectionChild}
                      alt=""
                      src="../vector-1.svg"
                    />
                    <b className={styles.s730}>S$ 936</b>
                  </div>
                </div>
                <div className={styles.flightCard}>
                  <div className={styles.airlineSection}>
                    <img
                      className={styles.turkishIcon}
                      alt=""
                      src="../turkish.svg"
                    />
                    <div className={styles.singaporeAirlines}>
                      Turkish Airlines
                    </div>
                  </div>
                  <div className={styles.flightDetailsSection}>
                    <div className={styles.departureDetails}>
                      <div className={styles.am}>11:35 PM</div>
                      <div className={styles.sin}>SIN</div>
                    </div>
                    <div className={styles.flightduration}>
                      <img
                        className={styles.flighticon}
                        alt=""
                        src="../flighticon3.svg"
                      />
                      <div className={styles.h55mNonStop}>33H 10M, 1-stop</div>
                    </div>
                    <div className={styles.arrivalDetails}>
                      <div className={styles.am}>4:45 PM</div>
                      <div className={styles.sin1}>LAX</div>
                    </div>
                  </div>
                  <div className={styles.priceSection}>
                    <img
                      className={styles.priceSectionChild}
                      alt=""
                      src="../vector-1.svg"
                    />
                    <b className={styles.s730}>S$ 673</b>
                  </div>
                </div>
                <div className={styles.flightCard}>
                  <div className={styles.airlineSection}>
                    <img
                      className={styles.japanIcon}
                      alt=""
                      src="../japan1.svg"
                    />
                    <div className={styles.singaporeAirlines}>
                      Japan Airlines
                    </div>
                  </div>
                  <div className={styles.flightDetailsSection}>
                    <div className={styles.departureDetails}>
                      <div className={styles.am}>10:25 PM</div>
                      <div className={styles.sin}>SIN</div>
                    </div>
                    <div className={styles.flightduration}>
                      <img
                        className={styles.flighticon}
                        alt=""
                        src="../flighticon3.svg"
                      />
                      <div className={styles.h55mNonStop}>26H 45M, 1-stop</div>
                    </div>
                    <div className={styles.arrivalDetails}>
                      <div className={styles.am}>9:10 AM</div>
                      <div className={styles.sin1}>LAX</div>
                    </div>
                  </div>
                  <div className={styles.priceSection}>
                    <img
                      className={styles.priceSectionChild}
                      alt=""
                      src="../vector-1.svg"
                    />
                    <b className={styles.s730}>S$ 859</b>
                  </div>
                </div>
                <div className={styles.primaryButton}>
                  <div className={styles.primaryButtonChild} />
                  <div className={styles.searchFlights}>Show more results</div>
                </div>
              </div>
              <div className={styles.recentlyBooked}>
                <div className={styles.recentlyBookedTitle}>
                  <b className={styles.results6}>Recently booked</b>
                  <img
                    className={styles.recentlyBookedTitleChild}
                    alt=""
                    src="../vector-21.svg"
                  />
                </div>
                <div className={styles.bookingCards}>
                  <div className={styles.bookingCard}>
                    <div className={styles.airlinePrice}>
                      <div className={styles.airline}>
                        <img
                          className={styles.airlinelogoIcon}
                          alt=""
                          src="../icon.svg"
                        />
                        <div className={styles.flightclass}>
                          Singapore Airlines
                        </div>
                      </div>
                      <div className={styles.price}>$1128</div>
                    </div>
                    <div className={styles.locations}>
                      <div className={styles.departure}>
                        <div className={styles.depcode}>SIN</div>
                        <div className={styles.depname}>Singapore</div>
                      </div>
                      <img
                        className={styles.flightIcon}
                        alt=""
                        src="../flight-icon.svg"
                      />
                      <div className={styles.arrival}>
                        <div className={styles.depcode}>LAX</div>
                        <div className={styles.arrname}>Los Angeles</div>
                      </div>
                    </div>
                    <div className={styles.details}>
                      <div className={styles.calenderParent}>
                        <img
                          className={styles.classIcon}
                          alt=""
                          src="../class-icon.svg"
                        />
                        <div className={styles.flightclass}>Economy</div>
                      </div>
                      <div className={styles.calenderParent}>
                        <img
                          className={styles.classIcon}
                          alt=""
                          src="../calender.svg"
                        />
                        <div className={styles.flightclass}>2 Adults</div>
                      </div>
                    </div>
                    <div className={styles.provider}>
                      <div className={styles.flightclass}>
                        <span>{`Booked on `}</span>
                        <span className={styles.expedia}>Expedia</span>
                      </div>
                      <div className={styles.timeago}>1s ago!</div>
                    </div>
                  </div>
                  <div className={styles.bookingCard}>
                    <div className={styles.airlinePrice}>
                      <div className={styles.airline}>
                        <img
                          className={styles.airlinelogoIcon}
                          alt=""
                          src="../icon1.svg"
                        />
                        <div className={styles.flightclass}>
                          American Airlines
                        </div>
                      </div>
                      <div className={styles.price}>$1024</div>
                    </div>
                    <div className={styles.locations}>
                      <div className={styles.departure}>
                        <div className={styles.depcode}>SFO</div>
                        <div className={styles.depname}>San Francisco</div>
                      </div>
                      <img
                        className={styles.flightIcon}
                        alt=""
                        src="../flight-icon.svg"
                      />
                      <div className={styles.arrival}>
                        <div className={styles.depcode}>SIN</div>
                        <div className={styles.arrname}>Singapore</div>
                      </div>
                    </div>
                    <div className={styles.details}>
                      <div className={styles.calenderParent}>
                        <img
                          className={styles.classIcon}
                          alt=""
                          src="../class-icon1.svg"
                        />
                        <div className={styles.flightclass}>First Class</div>
                      </div>
                      <div className={styles.calenderParent}>
                        <img
                          className={styles.classIcon}
                          alt=""
                          src="../calender1.svg"
                        />
                        <div className={styles.flightclass}>1 Adults</div>
                      </div>
                    </div>
                    <div className={styles.provider}>
                      <div className={styles.flightclass}>
                        <span>{`Booked on `}</span>
                        <span className={styles.expedia}>Kayak</span>
                      </div>
                      <div className={styles.timeago}>2s ago!</div>
                    </div>
                  </div>
                  <div className={styles.bookingCard}>
                    <div className={styles.airlinePrice}>
                      <div className={styles.airline}>
                        <img
                          className={styles.airlinelogoIcon}
                          alt=""
                          src="../icon2.svg"
                        />
                        <div className={styles.flightclass}>Japan Airlines</div>
                      </div>
                      <div className={styles.price}>$2996</div>
                    </div>
                    <div className={styles.locations}>
                      <div className={styles.departure}>
                        <div className={styles.depcode}>PHX</div>
                        <div className={styles.depname}>Phoenix</div>
                      </div>
                      <img
                        className={styles.flightIcon}
                        alt=""
                        src="../flight-icon2.svg"
                      />
                      <div className={styles.arrival}>
                        <div className={styles.depcode}>DXB</div>
                        <div className={styles.depname}>Dubai</div>
                      </div>
                    </div>
                    <div className={styles.details}>
                      <div className={styles.calenderParent}>
                        <img
                          className={styles.classIcon}
                          alt=""
                          src="../class-icon1.svg"
                        />
                        <div className={styles.flightclass}>Economy</div>
                      </div>
                      <div className={styles.calenderParent}>
                        <img
                          className={styles.classIcon}
                          alt=""
                          src="../calender2.svg"
                        />
                        <div className={styles.flightclass}>3 Adults</div>
                      </div>
                    </div>
                    <div className={styles.provider}>
                      <div className={styles.flightclass}>
                        <span>{`Booked on `}</span>
                        <span className={styles.expedia}>Skyscanner</span>
                      </div>
                      <div className={styles.timeago}>3s ago!</div>
                    </div>
                  </div>
                  <div className={styles.showMore}>
                    <div className={styles.flightclass}>Show more</div>
                    <img
                      className={styles.classIcon}
                      alt=""
                      src="../icon--back.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footerSection}>
            <div className={styles.formText}>
              <div className={styles.homeContents}>
                <div className={styles.upcomingFlightSection}>
                  <div className={styles.upcomingFlightSection1}>
                    <b className={styles.recentSearches}>Recent Searches</b>
                    <div className={styles.flightDetails}>
                      <div className={styles.recentSearches1}>
                        <div className={styles.flightMainContainer}>
                          <div className={styles.airlinePrice}>
                            <div className={styles.fromDetails}>
                              <b className={styles.my}>SIN</b>
                            </div>
                            <img
                              className={styles.durationIcon}
                              alt=""
                              src="../duration.svg"
                            />
                            <div className={styles.toDetails}>
                              <b className={styles.lax}>LAX</b>
                            </div>
                          </div>
                          <div className={styles.departOn7Container}>
                            <b>{`Depart on: `}</b>
                            <span>7 Sep 2021</span>
                          </div>
                        </div>
                        <div className={styles.flightMainContainer}>
                          <div className={styles.airlinePrice}>
                            <div className={styles.fromDetails}>
                              <b className={styles.my}>MY</b>
                            </div>
                            <img
                              className={styles.durationIcon}
                              alt=""
                              src="../duration1.svg"
                            />
                            <div className={styles.toDetails}>
                              <b className={styles.lax}>DUB</b>
                            </div>
                          </div>
                          <div className={styles.departOn7Container}>
                            <b>Depart on:</b>
                            <span> 9 Sep 2021</span>
                          </div>
                        </div>
                      </div>
                      <div className={styles.prepareMenu}>
                        <div className={styles.recentSearches}>
                          Prepare for your trip
                        </div>
                        <div className={styles.tripMenus}>
                          <button
                            className={styles.hotel}
                            onClick={onHotelClick}
                          >
                            <img
                              className={styles.hotelIcon}
                              alt=""
                              src="../hotel-icon.svg"
                            />
                            <div className={styles.hotel1}>Hotel</div>
                          </button>
                          <button className={styles.hotel}>
                            <div className={styles.hotelIcon}>
                              <div className={styles.background} />
                              <img
                                className={styles.ticketIcon}
                                alt=""
                                src="../ticket.svg"
                              />
                            </div>
                            <div className={styles.attractions1}>
                              Attractions
                            </div>
                          </button>
                          <button className={styles.hotel}>
                            <img
                              className={styles.hotelIcon}
                              alt=""
                              src="../eats-icon.svg"
                            />
                            <div className={styles.attractions1}>Eats</div>
                          </button>
                          <button className={styles.hotel}>
                            <div className={styles.hotelIcon}>
                              <div className={styles.background1} />
                              <img
                                className={styles.trainIcon}
                                alt=""
                                src="../vector.svg"
                              />
                            </div>
                            <div className={styles.attractions1}>Commute</div>
                          </button>
                          <button className={styles.hotel}>
                            <div className={styles.taxiIcon}>
                              <div className={styles.background2} />
                              <img
                                className={styles.taxiIcon1}
                                alt=""
                                src="../vector1.svg"
                              />
                            </div>
                            <div className={styles.taxi1}>Taxi</div>
                          </button>
                          <button className={styles.hotel}>
                            <div className={styles.hotelIcon}>
                              <div className={styles.background3} />
                              <img
                                className={styles.movieIcon}
                                alt=""
                                src="../vector2.svg"
                              />
                            </div>
                            <div className={styles.attractions1}>Movies</div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.popDestinationsMain}>
                  <div className={styles.destinationsTitles}>
                    <div className={styles.titleContainer}>
                      <b className={styles.recentSearches}>
                        Plan your next trip
                      </b>
                      <b className={styles.mostPopularDestinations}>
                        Most Popular Destinations
                      </b>
                    </div>
                    <button className={styles.viewAllTop}>
                      <div className={styles.viewAllDestinations}>
                        View all destinations
                      </div>
                      <img
                        className={styles.notificationBellIcon}
                        alt=""
                        src="../arrowright.svg"
                      />
                    </button>
                  </div>
                  <div className={styles.cardsContainer}>
                    <Col1
                      onCol1Click={onCol1Click}
                      parisImage="../parisimage@2x.png"
                      paris="Paris"
                      prop="$699"
                      parisColor="#ffa06a"
                      propColor="#ffa06a"
                    />
                    <button className={styles.col2}>
                      <div className={styles.greececard}>
                        <img
                          className={styles.greeceimageIcon}
                          alt=""
                          src="../greeceimage@2x.png"
                        />
                        <div className={styles.destinationDetails}>
                          <b className={styles.greece}>Greece</b>
                          <div className={styles.details3}>
                            <div className={styles.div1}>$1079</div>
                            <div className={styles.from}>from</div>
                          </div>
                        </div>
                      </div>
                    </button>
                    <button className={styles.col2} onClick={onCol3Click}>
                      <div className={styles.greececard}>
                        <img
                          className={styles.greeceimageIcon}
                          alt=""
                          src="../norwayimage@2x.png"
                        />
                        <div className={styles.destinationDetails}>
                          <b className={styles.greece}>Norway</b>
                          <div className={styles.details4}>
                            <div className={styles.div2}>$895</div>
                            <div className={styles.from1}>from</div>
                          </div>
                        </div>
                      </div>
                    </button>
                    <button className={styles.col2} onClick={onCol4Click}>
                      <div className={styles.greececard}>
                        <img
                          className={styles.greeceimageIcon}
                          alt=""
                          src="../tuscanyimage@2x.png"
                        />
                        <div className={styles.destinationDetails}>
                          <b className={styles.greece}>Tuscany</b>
                          <div className={styles.details5}>
                            <div className={styles.div3}>$1245</div>
                            <div className={styles.from2}>from</div>
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className={styles.viewAllBottom}>
                    <div className={styles.viewAllDestinations1}>
                      View all destinations
                    </div>
                    <img
                      className={styles.notificationBellIcon}
                      alt=""
                      src="../arrowright1.svg"
                    />
                  </div>
                </div>
                <div className={styles.recommendedHolidaysContainer}>
                  <div className={styles.recTitle}>
                    <b className={styles.recommendedHolidays}>
                      Recommended Holidays
                    </b>
                    <button className={styles.viewAllHolidaysParent}>
                      <div className={styles.viewAllHolidays}>
                        View all holidays
                      </div>
                      <img
                        className={styles.notificationBellIcon}
                        alt=""
                        src="../arrowright2.svg"
                      />
                    </button>
                  </div>
                  <div className={styles.recCardsContainer}>
                    <button className={styles.recCard1}>
                      <img
                        className={styles.unsplash5mv818tzxeoIcon}
                        alt=""
                        src="../unsplash5mv818tzxeo@2x.png"
                      />
                      <div className={styles.holidayDetails}>
                        <div className={styles.recTitle}>
                          <div className={styles.baliParent}>
                            <div className={styles.bali}>Bali</div>
                            <div className={styles.d3n}>4D3N</div>
                          </div>
                          <div className={styles.div4}>$899</div>
                        </div>
                      </div>
                    </button>
                    <button className={styles.recCard1}>
                      <img
                        className={styles.unsplash5mv818tzxeoIcon}
                        alt=""
                        src="../switzerlandimage@2x.png"
                      />
                      <div className={styles.holidayDetails}>
                        <div className={styles.recTitle}>
                          <div className={styles.baliParent}>
                            <div className={styles.bali}>Swiss</div>
                            <div className={styles.d3n}>6D5N</div>
                          </div>
                          <div className={styles.div4}>$900</div>
                        </div>
                      </div>
                    </button>
                    <button className={styles.recCard3}>
                      <img
                        className={styles.unsplash5mv818tzxeoIcon}
                        alt=""
                        src="../boracayimage@2x.png"
                      />
                      <div className={styles.holidayDetails}>
                        <div className={styles.recTitle}>
                          <div className={styles.baliParent}>
                            <div className={styles.bali}>Boracay</div>
                            <div className={styles.d3n}>5D4N</div>
                          </div>
                          <div className={styles.div4}>$699</div>
                        </div>
                      </div>
                    </button>
                    <button className={styles.recCard4}>
                      <img
                        className={styles.unsplash5mv818tzxeoIcon}
                        alt=""
                        src="../palawanimage@2x.png"
                      />
                      <div className={styles.holidayDetails}>
                        <div className={styles.recTitle}>
                          <div className={styles.baliParent}>
                            <div className={styles.bali}>Palawan</div>
                            <div className={styles.d3n}>4D3N</div>
                          </div>
                          <div className={styles.div4}>$789</div>
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className={styles.viewAllBottom1}>
                    <div className={styles.viewAllHolidays1}>
                      View all holidays
                    </div>
                    <img
                      className={styles.notificationBellIcon}
                      alt=""
                      src="../arrowright3.svg"
                    />
                  </div>
                </div>
                <div className={styles.popularStays}>
                  <div className={styles.popularStaysHeader}>
                    <div className={styles.popularStaysTitle}>
                      <b className={styles.popularStays1}>Popular Stays</b>
                    </div>
                    <button
                      className={styles.viewAllStaysButton}
                      onClick={onViewAllStaysButtonClick}
                    >
                      <div className={styles.viewAllStays}>View all stays</div>
                      <img
                        className={styles.notificationBellIcon}
                        alt=""
                        src="../arrowright2.svg"
                      />
                    </button>
                  </div>
                  <div className={styles.hotelCards}>
                    <div className={styles.hotelCard1}>
                      <div className={styles.hotelCard}>
                        <img
                          className={styles.matterhornSuitesImage}
                          alt=""
                          src="../unsplashrlwe8f8anoc@2x.png"
                        />
                        <div className={styles.stayDetails}>
                          <div className={styles.stayDetailsRows}>
                            <div className={styles.entireBungalow}>
                              Entire bungalow
                            </div>
                            <b className={styles.matterhornSuites}>
                              Matterhorn Suites
                            </b>
                            <div className={styles.night}>$575/night</div>
                          </div>
                          <img
                            className={styles.videoIcon}
                            alt=""
                            src="../video.svg"
                            onClick={openMatterhornPopup}
                          />
                        </div>
                        <div className={styles.rating}>
                          <div className={styles.reviews}>(60 reviews)</div>
                          <div className={styles.group}>
                            <div className={styles.div8}>4.9</div>
                            <img
                              className={styles.vectorIcon1}
                              alt=""
                              src="../vector3.svg"
                            />
                          </div>
                        </div>
                        <button className={styles.moreDetailsButton}>
                          <div className={styles.button1}>More details</div>
                        </button>
                      </div>
                    </div>
                    <div className={styles.hotelCard1}>
                      <div className={styles.hotelCard}>
                        <img
                          className={styles.matterhornSuitesImage}
                          alt=""
                          src="../unsplashtsn8bpopveo@2x.png"
                        />
                        <div className={styles.stayDetails1}>
                          <div className={styles.stayDetailsRows}>
                            <div className={styles.entireBungalow}>
                              2-Story beachfront suite
                            </div>
                            <b className={styles.matterhornSuites}>
                              Discovery Shores
                            </b>
                            <div className={styles.night}>$360/night</div>
                          </div>
                          <img
                            className={styles.videoIcon}
                            alt=""
                            src="../video.svg"
                            onClick={openMatterhornPopup1}
                          />
                        </div>
                        <div className={styles.rating}>
                          <div className={styles.reviews}>(116 reviews)</div>
                          <div className={styles.group}>
                            <div className={styles.div8}>4.8</div>
                            <img
                              className={styles.vectorIcon1}
                              alt=""
                              src="../vector4.svg"
                            />
                          </div>
                        </div>
                        <button className={styles.moreDetailsButton}>
                          <div className={styles.button1}>More details</div>
                        </button>
                      </div>
                    </div>
                    <div className={styles.hotelCard1}>
                      <div className={styles.hotelCard4}>
                        <img
                          className={styles.matterhornSuitesImage}
                          alt=""
                          src="../unsplashrlwe8f8anoc1@2x.png"
                        />
                        <div className={styles.stayDetails2}>
                          <div className={styles.stayDetailsRows}>
                            <div className={styles.entireBungalow}>
                              Single deluxe hut
                            </div>
                            <b className={styles.arcticHut}>{`Arctic Hut `}</b>
                            <div className={styles.night}>$420/night</div>
                          </div>
                          <img
                            className={styles.videoIcon}
                            alt=""
                            src="../video.svg"
                            onClick={openMatterhornPopup2}
                          />
                        </div>
                        <div className={styles.rating}>
                          <div className={styles.reviews2}>(78 reviews)</div>
                          <div className={styles.group}>
                            <div className={styles.div10}>4.7</div>
                            <img
                              className={styles.vectorIcon3}
                              alt=""
                              src="../vector5.svg"
                            />
                          </div>
                        </div>
                        <button className={styles.moreDetailsButton}>
                          <div className={styles.button1}>More details</div>
                        </button>
                      </div>
                    </div>
                    <div className={styles.hotelCard41}>
                      <div className={styles.hotelCard5}>
                        <img
                          className={styles.matterhornSuitesImage}
                          alt=""
                          src="../unsplashyqrybvxug5q@2x.png"
                        />
                        <div className={styles.stayDetails}>
                          <div className={styles.stayDetailsRows}>
                            <div className={styles.entireBungalow}>
                              Deluxe King Room
                            </div>
                            <b className={styles.arcticHut}>Lake Louise Inn</b>
                            <div className={styles.night}>$244/night</div>
                          </div>
                          <img
                            className={styles.videoIcon}
                            alt=""
                            src="../video.svg"
                            onClick={openMatterhornPopup3}
                          />
                        </div>
                        <div className={styles.rating}>
                          <div className={styles.reviews}>(63 reviews)</div>
                          <div className={styles.group}>
                            <div className={styles.div8}>4.6</div>
                            <img
                              className={styles.vectorIcon1}
                              alt=""
                              src="../vector6.svg"
                            />
                          </div>
                        </div>
                        <button className={styles.moreDetailsButton}>
                          <div className={styles.button1}>More details</div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className={styles.mobileViewAllStays}>
                    <div className={styles.viewAllStays1}>View all stays</div>
                    <img
                      className={styles.notificationBellIcon}
                      alt=""
                      src="../arrowright5.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.newsletterFormSection}>
                <img
                  className={styles.newsletterSectionBackground}
                  alt=""
                  src="../newsletter-section-background@2x.png"
                />
                <div className={styles.subscribeForm}>
                  <div className={styles.formHeader}>
                    <b className={styles.recentSearches}>
                      subscribe to our newsletter
                    </b>
                    <b className={styles.formTitle}>Get weekly updates</b>
                  </div>
                  <div className={styles.form}>
                    <div className={styles.formText}>
                      <div className={styles.fillInYour}>
                        Fill in your details to join the party!
                      </div>
                    </div>
                    <div className={styles.formFields}>
                      <div className={styles.formText}>
                        <TextField
                          className={styles.input}
                          color="primary"
                          variant="outlined"
                          type="text"
                          label="Your name"
                          size="medium"
                          margin="none"
                        />
                      </div>
                      <div className={styles.formText}>
                        <TextField
                          className={styles.input}
                          color="primary"
                          variant="outlined"
                          type="text"
                          label="Email address"
                          size="medium"
                          margin="none"
                        />
                      </div>
                    </div>
                    <button className={styles.button5}>
                      <div className={styles.unstyledbutton}>
                        <div className={styles.button6}>submit</div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <footer className={styles.footer}>
                <div className={styles.fickleflightBio}>
                  <img className={styles.logoIcon} alt="" src="../logo.svg" />
                  <div className={styles.fickleFlightIs}>
                    Fickle Flight is your one-stop travel portal. We offer
                    hassle free flight and hotel bookings. We also have all your
                    flight needs in you online shop.
                  </div>
                  <img
                    className={styles.socialIcons}
                    alt=""
                    src="../social-icons.svg"
                  />
                </div>
                <div className={styles.seperator} />
                <div className={styles.footerLinks}>
                  <div className={styles.company}>
                    <div className={styles.aboutUs}>About Us</div>
                    <div className={styles.company1}>Company</div>
                    <div className={styles.news}>News</div>
                    <div className={styles.careers}>Careers</div>
                    <div className={styles.howWeWork}>How we work</div>
                  </div>
                  <div className={styles.company}>
                    <div className={styles.account}>Account</div>
                    <div className={styles.support1}>Support</div>
                    <div className={styles.supportCenter}>Support Center</div>
                    <div className={styles.faq}>FAQ</div>
                    <div className={styles.accessibility}>Accessibility</div>
                  </div>
                  <div className={styles.more}>
                    <div className={styles.covidAdvisory}>Covid Advisory</div>
                    <div className={styles.more1}>More</div>
                    <div className={styles.airlineFees}>Airline Fees</div>
                    <div className={styles.tips}>Tips</div>
                    <div className={styles.howWeWork}>Quarantine Rules</div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
        {isMatterhornPopupOpen && (
          <PortalPopup
            overlayColor="rgba(0, 0, 0, 0.3)"
            placement="Centered"
            onOutsideClick={closeMatterhornPopup}
          >
            <MatterhornPopup onClose={closeMatterhornPopup} />
          </PortalPopup>
        )}
        {isMatterhornPopup1Open && (
          <PortalPopup
            overlayColor="rgba(0, 0, 0, 0.3)"
            placement="Centered"
            onOutsideClick={closeMatterhornPopup1}
          >
            <MatterhornPopup onClose={closeMatterhornPopup1} />
          </PortalPopup>
        )}
        {isMatterhornPopup2Open && (
          <PortalPopup
            overlayColor="rgba(0, 0, 0, 0.3)"
            placement="Centered"
            onOutsideClick={closeMatterhornPopup2}
          >
            <MatterhornPopup onClose={closeMatterhornPopup2} />
          </PortalPopup>
        )}
        {isMatterhornPopup3Open && (
          <PortalPopup
            overlayColor="rgba(0, 0, 0, 0.3)"
            placement="Centered"
            onOutsideClick={closeMatterhornPopup3}
          >
            <MatterhornPopup onClose={closeMatterhornPopup3} />
          </PortalPopup>
        )}
      </>
    </LocalizationProvider>
  );
};

export default ResultsPage;
