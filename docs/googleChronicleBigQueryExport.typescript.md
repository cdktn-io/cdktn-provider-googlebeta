# `googleChronicleBigQueryExport` Submodule <a name="`googleChronicleBigQueryExport` Submodule" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleChronicleBigQueryExport <a name="GoogleChronicleBigQueryExport" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_big_query_export google_chronicle_big_query_export}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer"></a>

```typescript
import { googleChronicleBigQueryExport } from '@cdktn/provider-google-beta'

new googleChronicleBigQueryExport.GoogleChronicleBigQueryExport(scope: Construct, id: string, config: GoogleChronicleBigQueryExportConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig">GoogleChronicleBigQueryExportConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig">GoogleChronicleBigQueryExportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putEntityGraphSettings">putEntityGraphSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putIocMatchesSettings">putIocMatchesSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putRuleDetectionsSettings">putRuleDetectionsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putUdmEventsAggregatesSettings">putUdmEventsAggregatesSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putUdmEventsSettings">putUdmEventsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetBigQueryExportPackage">resetBigQueryExportPackage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetEntityGraphSettings">resetEntityGraphSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetIocMatchesSettings">resetIocMatchesSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetRuleDetectionsSettings">resetRuleDetectionsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetUdmEventsAggregatesSettings">resetUdmEventsAggregatesSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetUdmEventsSettings">resetUdmEventsSettings</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEntityGraphSettings` <a name="putEntityGraphSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putEntityGraphSettings"></a>

```typescript
public putEntityGraphSettings(value: GoogleChronicleBigQueryExportEntityGraphSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putEntityGraphSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettings">GoogleChronicleBigQueryExportEntityGraphSettings</a>

---

##### `putIocMatchesSettings` <a name="putIocMatchesSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putIocMatchesSettings"></a>

```typescript
public putIocMatchesSettings(value: GoogleChronicleBigQueryExportIocMatchesSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putIocMatchesSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettings">GoogleChronicleBigQueryExportIocMatchesSettings</a>

---

##### `putRuleDetectionsSettings` <a name="putRuleDetectionsSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putRuleDetectionsSettings"></a>

```typescript
public putRuleDetectionsSettings(value: GoogleChronicleBigQueryExportRuleDetectionsSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putRuleDetectionsSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettings">GoogleChronicleBigQueryExportRuleDetectionsSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleChronicleBigQueryExportTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts">GoogleChronicleBigQueryExportTimeouts</a>

---

##### `putUdmEventsAggregatesSettings` <a name="putUdmEventsAggregatesSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putUdmEventsAggregatesSettings"></a>

```typescript
public putUdmEventsAggregatesSettings(value: GoogleChronicleBigQueryExportUdmEventsAggregatesSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putUdmEventsAggregatesSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings">GoogleChronicleBigQueryExportUdmEventsAggregatesSettings</a>

---

##### `putUdmEventsSettings` <a name="putUdmEventsSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putUdmEventsSettings"></a>

```typescript
public putUdmEventsSettings(value: GoogleChronicleBigQueryExportUdmEventsSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putUdmEventsSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettings">GoogleChronicleBigQueryExportUdmEventsSettings</a>

---

##### `resetBigQueryExportPackage` <a name="resetBigQueryExportPackage" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetBigQueryExportPackage"></a>

```typescript
public resetBigQueryExportPackage(): void
```

##### `resetEntityGraphSettings` <a name="resetEntityGraphSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetEntityGraphSettings"></a>

```typescript
public resetEntityGraphSettings(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIocMatchesSettings` <a name="resetIocMatchesSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetIocMatchesSettings"></a>

```typescript
public resetIocMatchesSettings(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRuleDetectionsSettings` <a name="resetRuleDetectionsSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetRuleDetectionsSettings"></a>

```typescript
public resetRuleDetectionsSettings(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUdmEventsAggregatesSettings` <a name="resetUdmEventsAggregatesSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetUdmEventsAggregatesSettings"></a>

```typescript
public resetUdmEventsAggregatesSettings(): void
```

##### `resetUdmEventsSettings` <a name="resetUdmEventsSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetUdmEventsSettings"></a>

```typescript
public resetUdmEventsSettings(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleChronicleBigQueryExport resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.isConstruct"></a>

```typescript
import { googleChronicleBigQueryExport } from '@cdktn/provider-google-beta'

googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.isTerraformElement"></a>

```typescript
import { googleChronicleBigQueryExport } from '@cdktn/provider-google-beta'

googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.isTerraformResource"></a>

```typescript
import { googleChronicleBigQueryExport } from '@cdktn/provider-google-beta'

googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.generateConfigForImport"></a>

```typescript
import { googleChronicleBigQueryExport } from '@cdktn/provider-google-beta'

googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleChronicleBigQueryExport resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleChronicleBigQueryExport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleChronicleBigQueryExport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_big_query_export#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleChronicleBigQueryExport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.entityGraphSettings">entityGraphSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference">GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.iocMatchesSettings">iocMatchesSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference">GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.provisioned">provisioned</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.ruleDetectionsSettings">ruleDetectionsSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference">GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference">GoogleChronicleBigQueryExportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.udmEventsAggregatesSettings">udmEventsAggregatesSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference">GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.udmEventsSettings">udmEventsSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference">GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.bigQueryExportPackageInput">bigQueryExportPackageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.entityGraphSettingsInput">entityGraphSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettings">GoogleChronicleBigQueryExportEntityGraphSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.instanceInput">instanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.iocMatchesSettingsInput">iocMatchesSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettings">GoogleChronicleBigQueryExportIocMatchesSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.ruleDetectionsSettingsInput">ruleDetectionsSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettings">GoogleChronicleBigQueryExportRuleDetectionsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts">GoogleChronicleBigQueryExportTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.udmEventsAggregatesSettingsInput">udmEventsAggregatesSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings">GoogleChronicleBigQueryExportUdmEventsAggregatesSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.udmEventsSettingsInput">udmEventsSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettings">GoogleChronicleBigQueryExportUdmEventsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.bigQueryExportPackage">bigQueryExportPackage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.instance">instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `entityGraphSettings`<sup>Required</sup> <a name="entityGraphSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.entityGraphSettings"></a>

```typescript
public readonly entityGraphSettings: GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference">GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference</a>

---

##### `iocMatchesSettings`<sup>Required</sup> <a name="iocMatchesSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.iocMatchesSettings"></a>

```typescript
public readonly iocMatchesSettings: GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference">GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `provisioned`<sup>Required</sup> <a name="provisioned" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.provisioned"></a>

```typescript
public readonly provisioned: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `ruleDetectionsSettings`<sup>Required</sup> <a name="ruleDetectionsSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.ruleDetectionsSettings"></a>

```typescript
public readonly ruleDetectionsSettings: GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference">GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleChronicleBigQueryExportTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference">GoogleChronicleBigQueryExportTimeoutsOutputReference</a>

---

##### `udmEventsAggregatesSettings`<sup>Required</sup> <a name="udmEventsAggregatesSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.udmEventsAggregatesSettings"></a>

```typescript
public readonly udmEventsAggregatesSettings: GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference">GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference</a>

---

##### `udmEventsSettings`<sup>Required</sup> <a name="udmEventsSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.udmEventsSettings"></a>

```typescript
public readonly udmEventsSettings: GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference">GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference</a>

---

##### `bigQueryExportPackageInput`<sup>Optional</sup> <a name="bigQueryExportPackageInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.bigQueryExportPackageInput"></a>

```typescript
public readonly bigQueryExportPackageInput: string;
```

- *Type:* string

---

##### `entityGraphSettingsInput`<sup>Optional</sup> <a name="entityGraphSettingsInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.entityGraphSettingsInput"></a>

```typescript
public readonly entityGraphSettingsInput: GoogleChronicleBigQueryExportEntityGraphSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettings">GoogleChronicleBigQueryExportEntityGraphSettings</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.instanceInput"></a>

```typescript
public readonly instanceInput: string;
```

- *Type:* string

---

##### `iocMatchesSettingsInput`<sup>Optional</sup> <a name="iocMatchesSettingsInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.iocMatchesSettingsInput"></a>

```typescript
public readonly iocMatchesSettingsInput: GoogleChronicleBigQueryExportIocMatchesSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettings">GoogleChronicleBigQueryExportIocMatchesSettings</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `ruleDetectionsSettingsInput`<sup>Optional</sup> <a name="ruleDetectionsSettingsInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.ruleDetectionsSettingsInput"></a>

```typescript
public readonly ruleDetectionsSettingsInput: GoogleChronicleBigQueryExportRuleDetectionsSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettings">GoogleChronicleBigQueryExportRuleDetectionsSettings</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleChronicleBigQueryExportTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts">GoogleChronicleBigQueryExportTimeouts</a>

---

##### `udmEventsAggregatesSettingsInput`<sup>Optional</sup> <a name="udmEventsAggregatesSettingsInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.udmEventsAggregatesSettingsInput"></a>

```typescript
public readonly udmEventsAggregatesSettingsInput: GoogleChronicleBigQueryExportUdmEventsAggregatesSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings">GoogleChronicleBigQueryExportUdmEventsAggregatesSettings</a>

---

##### `udmEventsSettingsInput`<sup>Optional</sup> <a name="udmEventsSettingsInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.udmEventsSettingsInput"></a>

```typescript
public readonly udmEventsSettingsInput: GoogleChronicleBigQueryExportUdmEventsSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettings">GoogleChronicleBigQueryExportUdmEventsSettings</a>

---

##### `bigQueryExportPackage`<sup>Required</sup> <a name="bigQueryExportPackage" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.bigQueryExportPackage"></a>

```typescript
public readonly bigQueryExportPackage: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleChronicleBigQueryExportConfig <a name="GoogleChronicleBigQueryExportConfig" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.Initializer"></a>

```typescript
import { googleChronicleBigQueryExport } from '@cdktn/provider-google-beta'

const googleChronicleBigQueryExportConfig: googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.instance">instance</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.bigQueryExportPackage">bigQueryExportPackage</a></code> | <code>string</code> | The BigQueryExportPackage entitled for the Chronicle instance. Possible values: ["BIG_QUERY_EXPORT_PACKAGE_BYOBQ", "BIG_QUERY_EXPORT_PACKAGE_ADVANCED"]. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.entityGraphSettings">entityGraphSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettings">GoogleChronicleBigQueryExportEntityGraphSettings</a></code> | entity_graph_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_big_query_export#id GoogleChronicleBigQueryExport#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.iocMatchesSettings">iocMatchesSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettings">GoogleChronicleBigQueryExportIocMatchesSettings</a></code> | ioc_matches_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_big_query_export#project GoogleChronicleBigQueryExport#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.ruleDetectionsSettings">ruleDetectionsSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettings">GoogleChronicleBigQueryExportRuleDetectionsSettings</a></code> | rule_detections_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts">GoogleChronicleBigQueryExportTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.udmEventsAggregatesSettings">udmEventsAggregatesSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings">GoogleChronicleBigQueryExportUdmEventsAggregatesSettings</a></code> | udm_events_aggregates_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.udmEventsSettings">udmEventsSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettings">GoogleChronicleBigQueryExportUdmEventsSettings</a></code> | udm_events_settings block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_big_query_export#instance GoogleChronicleBigQueryExport#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_big_query_export#location GoogleChronicleBigQueryExport#location}

---

##### `bigQueryExportPackage`<sup>Optional</sup> <a name="bigQueryExportPackage" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.bigQueryExportPackage"></a>

```typescript
public readonly bigQueryExportPackage: string;
```

- *Type:* string

The BigQueryExportPackage entitled for the Chronicle instance. Possible values: ["BIG_QUERY_EXPORT_PACKAGE_BYOBQ", "BIG_QUERY_EXPORT_PACKAGE_ADVANCED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_big_query_export#big_query_export_package GoogleChronicleBigQueryExport#big_query_export_package}

---

##### `entityGraphSettings`<sup>Optional</sup> <a name="entityGraphSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.entityGraphSettings"></a>

```typescript
public readonly entityGraphSettings: GoogleChronicleBigQueryExportEntityGraphSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettings">GoogleChronicleBigQueryExportEntityGraphSettings</a>

entity_graph_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_big_query_export#entity_graph_settings GoogleChronicleBigQueryExport#entity_graph_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_big_query_export#id GoogleChronicleBigQueryExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `iocMatchesSettings`<sup>Optional</sup> <a name="iocMatchesSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.iocMatchesSettings"></a>

```typescript
public readonly iocMatchesSettings: GoogleChronicleBigQueryExportIocMatchesSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettings">GoogleChronicleBigQueryExportIocMatchesSettings</a>

ioc_matches_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_big_query_export#ioc_matches_settings GoogleChronicleBigQueryExport#ioc_matches_settings}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_big_query_export#project GoogleChronicleBigQueryExport#project}.

---

##### `ruleDetectionsSettings`<sup>Optional</sup> <a name="ruleDetectionsSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.ruleDetectionsSettings"></a>

```typescript
public readonly ruleDetectionsSettings: GoogleChronicleBigQueryExportRuleDetectionsSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettings">GoogleChronicleBigQueryExportRuleDetectionsSettings</a>

rule_detections_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_big_query_export#rule_detections_settings GoogleChronicleBigQueryExport#rule_detections_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleChronicleBigQueryExportTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts">GoogleChronicleBigQueryExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_big_query_export#timeouts GoogleChronicleBigQueryExport#timeouts}

---

##### `udmEventsAggregatesSettings`<sup>Optional</sup> <a name="udmEventsAggregatesSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.udmEventsAggregatesSettings"></a>

```typescript
public readonly udmEventsAggregatesSettings: GoogleChronicleBigQueryExportUdmEventsAggregatesSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings">GoogleChronicleBigQueryExportUdmEventsAggregatesSettings</a>

udm_events_aggregates_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_big_query_export#udm_events_aggregates_settings GoogleChronicleBigQueryExport#udm_events_aggregates_settings}

---

##### `udmEventsSettings`<sup>Optional</sup> <a name="udmEventsSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.udmEventsSettings"></a>

```typescript
public readonly udmEventsSettings: GoogleChronicleBigQueryExportUdmEventsSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettings">GoogleChronicleBigQueryExportUdmEventsSettings</a>

udm_events_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_big_query_export#udm_events_settings GoogleChronicleBigQueryExport#udm_events_settings}

---

### GoogleChronicleBigQueryExportEntityGraphSettings <a name="GoogleChronicleBigQueryExportEntityGraphSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettings.Initializer"></a>

```typescript
import { googleChronicleBigQueryExport } from '@cdktn/provider-google-beta'

const googleChronicleBigQueryExportEntityGraphSettings: googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettings.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the data source is enabled for export. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettings.property.retentionDays">retentionDays</a></code> | <code>number</code> | The retention period for the data source in days. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettings.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the data source is enabled for export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_big_query_export#enabled GoogleChronicleBigQueryExport#enabled}

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettings.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

The retention period for the data source in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_big_query_export#retention_days GoogleChronicleBigQueryExport#retention_days}

---

### GoogleChronicleBigQueryExportIocMatchesSettings <a name="GoogleChronicleBigQueryExportIocMatchesSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettings.Initializer"></a>

```typescript
import { googleChronicleBigQueryExport } from '@cdktn/provider-google-beta'

const googleChronicleBigQueryExportIocMatchesSettings: googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettings.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the data source is enabled for export. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettings.property.retentionDays">retentionDays</a></code> | <code>number</code> | The retention period for the data source in days. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettings.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the data source is enabled for export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_big_query_export#enabled GoogleChronicleBigQueryExport#enabled}

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettings.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

The retention period for the data source in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_big_query_export#retention_days GoogleChronicleBigQueryExport#retention_days}

---

### GoogleChronicleBigQueryExportRuleDetectionsSettings <a name="GoogleChronicleBigQueryExportRuleDetectionsSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettings.Initializer"></a>

```typescript
import { googleChronicleBigQueryExport } from '@cdktn/provider-google-beta'

const googleChronicleBigQueryExportRuleDetectionsSettings: googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettings.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the data source is enabled for export. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettings.property.retentionDays">retentionDays</a></code> | <code>number</code> | The retention period for the data source in days. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettings.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the data source is enabled for export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_big_query_export#enabled GoogleChronicleBigQueryExport#enabled}

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettings.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

The retention period for the data source in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_big_query_export#retention_days GoogleChronicleBigQueryExport#retention_days}

---

### GoogleChronicleBigQueryExportTimeouts <a name="GoogleChronicleBigQueryExportTimeouts" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts.Initializer"></a>

```typescript
import { googleChronicleBigQueryExport } from '@cdktn/provider-google-beta'

const googleChronicleBigQueryExportTimeouts: googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_big_query_export#create GoogleChronicleBigQueryExport#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_big_query_export#delete GoogleChronicleBigQueryExport#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_big_query_export#update GoogleChronicleBigQueryExport#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_big_query_export#create GoogleChronicleBigQueryExport#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_big_query_export#delete GoogleChronicleBigQueryExport#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_big_query_export#update GoogleChronicleBigQueryExport#update}.

---

### GoogleChronicleBigQueryExportUdmEventsAggregatesSettings <a name="GoogleChronicleBigQueryExportUdmEventsAggregatesSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings.Initializer"></a>

```typescript
import { googleChronicleBigQueryExport } from '@cdktn/provider-google-beta'

const googleChronicleBigQueryExportUdmEventsAggregatesSettings: googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the data source is enabled for export. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings.property.retentionDays">retentionDays</a></code> | <code>number</code> | The retention period for the data source in days. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the data source is enabled for export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_big_query_export#enabled GoogleChronicleBigQueryExport#enabled}

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

The retention period for the data source in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_big_query_export#retention_days GoogleChronicleBigQueryExport#retention_days}

---

### GoogleChronicleBigQueryExportUdmEventsSettings <a name="GoogleChronicleBigQueryExportUdmEventsSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettings.Initializer"></a>

```typescript
import { googleChronicleBigQueryExport } from '@cdktn/provider-google-beta'

const googleChronicleBigQueryExportUdmEventsSettings: googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettings.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the data source is enabled for export. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettings.property.retentionDays">retentionDays</a></code> | <code>number</code> | The retention period for the data source in days. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettings.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the data source is enabled for export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_big_query_export#enabled GoogleChronicleBigQueryExport#enabled}

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettings.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

The retention period for the data source in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.42.0/docs/resources/google_chronicle_big_query_export#retention_days GoogleChronicleBigQueryExport#retention_days}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference <a name="GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.Initializer"></a>

```typescript
import { googleChronicleBigQueryExport } from '@cdktn/provider-google-beta'

new googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.dataFreshnessTime">dataFreshnessTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.dataVolume">dataVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.latestExportJobState">latestExportJobState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.retentionDaysInput">retentionDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.retentionDays">retentionDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettings">GoogleChronicleBigQueryExportEntityGraphSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataFreshnessTime`<sup>Required</sup> <a name="dataFreshnessTime" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.dataFreshnessTime"></a>

```typescript
public readonly dataFreshnessTime: string;
```

- *Type:* string

---

##### `dataVolume`<sup>Required</sup> <a name="dataVolume" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.dataVolume"></a>

```typescript
public readonly dataVolume: string;
```

- *Type:* string

---

##### `latestExportJobState`<sup>Required</sup> <a name="latestExportJobState" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.latestExportJobState"></a>

```typescript
public readonly latestExportJobState: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `retentionDaysInput`<sup>Optional</sup> <a name="retentionDaysInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.retentionDaysInput"></a>

```typescript
public readonly retentionDaysInput: number;
```

- *Type:* number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleChronicleBigQueryExportEntityGraphSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettings">GoogleChronicleBigQueryExportEntityGraphSettings</a>

---


### GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference <a name="GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.Initializer"></a>

```typescript
import { googleChronicleBigQueryExport } from '@cdktn/provider-google-beta'

new googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.dataFreshnessTime">dataFreshnessTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.dataVolume">dataVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.latestExportJobState">latestExportJobState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.retentionDaysInput">retentionDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.retentionDays">retentionDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettings">GoogleChronicleBigQueryExportIocMatchesSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataFreshnessTime`<sup>Required</sup> <a name="dataFreshnessTime" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.dataFreshnessTime"></a>

```typescript
public readonly dataFreshnessTime: string;
```

- *Type:* string

---

##### `dataVolume`<sup>Required</sup> <a name="dataVolume" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.dataVolume"></a>

```typescript
public readonly dataVolume: string;
```

- *Type:* string

---

##### `latestExportJobState`<sup>Required</sup> <a name="latestExportJobState" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.latestExportJobState"></a>

```typescript
public readonly latestExportJobState: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `retentionDaysInput`<sup>Optional</sup> <a name="retentionDaysInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.retentionDaysInput"></a>

```typescript
public readonly retentionDaysInput: number;
```

- *Type:* number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleChronicleBigQueryExportIocMatchesSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettings">GoogleChronicleBigQueryExportIocMatchesSettings</a>

---


### GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference <a name="GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.Initializer"></a>

```typescript
import { googleChronicleBigQueryExport } from '@cdktn/provider-google-beta'

new googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.dataFreshnessTime">dataFreshnessTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.dataVolume">dataVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.latestExportJobState">latestExportJobState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.retentionDaysInput">retentionDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.retentionDays">retentionDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettings">GoogleChronicleBigQueryExportRuleDetectionsSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataFreshnessTime`<sup>Required</sup> <a name="dataFreshnessTime" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.dataFreshnessTime"></a>

```typescript
public readonly dataFreshnessTime: string;
```

- *Type:* string

---

##### `dataVolume`<sup>Required</sup> <a name="dataVolume" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.dataVolume"></a>

```typescript
public readonly dataVolume: string;
```

- *Type:* string

---

##### `latestExportJobState`<sup>Required</sup> <a name="latestExportJobState" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.latestExportJobState"></a>

```typescript
public readonly latestExportJobState: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `retentionDaysInput`<sup>Optional</sup> <a name="retentionDaysInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.retentionDaysInput"></a>

```typescript
public readonly retentionDaysInput: number;
```

- *Type:* number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleChronicleBigQueryExportRuleDetectionsSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettings">GoogleChronicleBigQueryExportRuleDetectionsSettings</a>

---


### GoogleChronicleBigQueryExportTimeoutsOutputReference <a name="GoogleChronicleBigQueryExportTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleChronicleBigQueryExport } from '@cdktn/provider-google-beta'

new googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts">GoogleChronicleBigQueryExportTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleChronicleBigQueryExportTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts">GoogleChronicleBigQueryExportTimeouts</a>

---


### GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference <a name="GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.Initializer"></a>

```typescript
import { googleChronicleBigQueryExport } from '@cdktn/provider-google-beta'

new googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.dataFreshnessTime">dataFreshnessTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.dataVolume">dataVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.latestExportJobState">latestExportJobState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.retentionDaysInput">retentionDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.retentionDays">retentionDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings">GoogleChronicleBigQueryExportUdmEventsAggregatesSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataFreshnessTime`<sup>Required</sup> <a name="dataFreshnessTime" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.dataFreshnessTime"></a>

```typescript
public readonly dataFreshnessTime: string;
```

- *Type:* string

---

##### `dataVolume`<sup>Required</sup> <a name="dataVolume" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.dataVolume"></a>

```typescript
public readonly dataVolume: string;
```

- *Type:* string

---

##### `latestExportJobState`<sup>Required</sup> <a name="latestExportJobState" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.latestExportJobState"></a>

```typescript
public readonly latestExportJobState: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `retentionDaysInput`<sup>Optional</sup> <a name="retentionDaysInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.retentionDaysInput"></a>

```typescript
public readonly retentionDaysInput: number;
```

- *Type:* number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleChronicleBigQueryExportUdmEventsAggregatesSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings">GoogleChronicleBigQueryExportUdmEventsAggregatesSettings</a>

---


### GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference <a name="GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.Initializer"></a>

```typescript
import { googleChronicleBigQueryExport } from '@cdktn/provider-google-beta'

new googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.dataFreshnessTime">dataFreshnessTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.dataVolume">dataVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.latestExportJobState">latestExportJobState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.retentionDaysInput">retentionDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.retentionDays">retentionDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettings">GoogleChronicleBigQueryExportUdmEventsSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataFreshnessTime`<sup>Required</sup> <a name="dataFreshnessTime" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.dataFreshnessTime"></a>

```typescript
public readonly dataFreshnessTime: string;
```

- *Type:* string

---

##### `dataVolume`<sup>Required</sup> <a name="dataVolume" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.dataVolume"></a>

```typescript
public readonly dataVolume: string;
```

- *Type:* string

---

##### `latestExportJobState`<sup>Required</sup> <a name="latestExportJobState" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.latestExportJobState"></a>

```typescript
public readonly latestExportJobState: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `retentionDaysInput`<sup>Optional</sup> <a name="retentionDaysInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.retentionDaysInput"></a>

```typescript
public readonly retentionDaysInput: number;
```

- *Type:* number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.retentionDays"></a>

```typescript
public readonly retentionDays: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleChronicleBigQueryExportUdmEventsSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettings">GoogleChronicleBigQueryExportUdmEventsSettings</a>

---



