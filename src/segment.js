const _attrs = Symbol('attrs')

/**
 * A segment.
 *
 * @class
 * @memberof segment
 */
class Segment {
  /**
   * Create a new Segment object.
   *
   * @param {Object} options - Options for construction of Segment
   * @param {string} options.uid - Unique tracking identifier
   * @param {number} options.number - Segment Number (one-based index value)
   * @param {string} options.label - Segment Label
   * @param {string} options.algorithmName - Segment Algorithm Name
   * @param {object} options.algorithmType - Segment Algorithm Type
   * @param {object} options.propertyCategory - Segmented Property Category Code
   * @param {object} options.propertyType - Segmented Property Type Code
   * @param {string} options.studyInstanceUID - Study Instance UID of Segmentation images
   * @param {string} options.seriesInstanceUID - Series Instance UID of Segmentation images
   * @param {string[]} options.sopInstanceUIDs - SOP Instance UIDs of Segmentation images
   * @param {string|undefined} options.paletteColorLookupTableUID - Palette Color Lookup Table UID
   */
  constructor ({
    uid,
    number,
    label,
    propertyCategory,
    propertyType,
    algorithmType,
    algorithmName,
    studyInstanceUID,
    seriesInstanceUID,
    sopInstanceUIDs,
    paletteColorLookupTableUID
  }) {
    this[_attrs] = {}
    if (uid === undefined) {
      throw new Error('Unique Tracking Identifier is required.')
    } else {
      this[_attrs].uid = uid
    }

    if (number === undefined) {
      throw new Error('Segment Number is required.')
    }
    this[_attrs].number = number

    if (label === undefined) {
      throw new Error('Segment Label is required.')
    }
    this[_attrs].label = label

    if (propertyCategory === undefined) {
      throw new Error('Segmented Property Category Code is required.')
    }
    this[_attrs].propertyCategory = propertyCategory

    if (propertyType === undefined) {
      throw new Error('Segmented Property Type Code is required.')
    }
    this[_attrs].propertyType = propertyType

    if (algorithmName === undefined) {
      throw new Error('Segment Algorithm Name is required.')
    }
    this[_attrs].algorithmType = algorithmType

    if (algorithmType === undefined) {
      throw new Error('Segment Algorithm Type is required.')
    }
    this[_attrs].algorithmName = algorithmName

    if (studyInstanceUID === undefined) {
      throw new Error('Study Instance UID is required.')
    }
    this[_attrs].studyInstanceUID = studyInstanceUID

    if (seriesInstanceUID === undefined) {
      throw new Error('Series Instance UID is required.')
    }
    this[_attrs].seriesInstanceUID = seriesInstanceUID

    if (sopInstanceUIDs === undefined) {
      throw new Error('SOP Instance UIDs are required.')
    }
    this[_attrs].sopInstanceUIDs = sopInstanceUIDs

    this[_attrs].paletteColorLookupTableUID = paletteColorLookupTableUID

    Object.freeze(this)
  }

  /**
   * Get Unique Tracking Identifier
   *
   * @returns {string} Unique Tracking Identifier
   */
  get uid () {
    return this[_attrs].uid
  }

  /**
   * Get Segment Number.
   *
   * @returns {number} Segment Number
   */
  get number () {
    return this[_attrs].number
  }

  /**
   * Get Segment Label
   *
   * @returns {string} Segment Label
   */
  get label () {
    return this[_attrs].label
  }

  /**
   * Get Segment Algorithm Name
   *
   * @returns {string} Segment Algorithm Name
   */
  get algorithmName () {
    return this[_attrs].algorithmName
  }

  /**
   * Get Segment Algorithm Type
   *
   * @returns {object} Segment Algorithm Type
   */
  get algorithmType () {
    return this[_attrs].algorithmType
  }

  /**
   * Get Segmented Property Category Code
   *
   * @returns {object} Segmented Property Category Code
   */
  get propertyCategory () {
    return this[_attrs].propertyCategory
  }

  /**
   * Get Segmented Property Type Code
   *
   * @returns {object} Segmented Property Type Code
   */
  get propertyType () {
    return this[_attrs].propertyType
  }

  /**
   * Get Study Instance UID of Segmentation images.
   *
   * @returns {string} Study Instance UID
   */
  get studyInstanceUID () {
    return this[_attrs].studyInstanceUID
  }

  /**
   * Get Series Instance UID of Segmentation images.
   *
   * @returns {string} Series Instance UID
   */
  get seriesInstanceUID () {
    return this[_attrs].seriesInstanceUID
  }

  /**
   * Get SOP Instance UIDs of Segmentation images.
   *
   * @returns {string[]} SOP Instance UIDs
   */
  get sopInstanceUIDs () {
    return this[_attrs].sopInstanceUIDs
  }

  /**
   * Get Palette Color Lookup Table UID.
   *
   * @returns {string} Palette Color Lookup Table UID
   */
  get paletteColorLookupTableUID () {
    return this[_attrs].paletteColorLookupTableUID
  }
}

export { Segment }
