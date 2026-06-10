# `googleDatastreamConnectionProfile` Submodule <a name="`googleDatastreamConnectionProfile` Submodule" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDatastreamConnectionProfile <a name="GoogleDatastreamConnectionProfile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile google_datastream_connection_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktn/provider-google-beta'

new googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile(scope: Construct, id: string, config: GoogleDatastreamConnectionProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig">GoogleDatastreamConnectionProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig">GoogleDatastreamConnectionProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putBigqueryProfile">putBigqueryProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putForwardSshConnectivity">putForwardSshConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putGcsProfile">putGcsProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putMongodbProfile">putMongodbProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putMysqlProfile">putMysqlProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putOracleProfile">putOracleProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putPostgresqlProfile">putPostgresqlProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putPrivateConnectivity">putPrivateConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putSalesforceProfile">putSalesforceProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putSpannerProfile">putSpannerProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putSqlServerProfile">putSqlServerProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetBigqueryProfile">resetBigqueryProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetCreateWithoutValidation">resetCreateWithoutValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetForwardSshConnectivity">resetForwardSshConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetGcsProfile">resetGcsProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetMongodbProfile">resetMongodbProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetMysqlProfile">resetMysqlProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetOracleProfile">resetOracleProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetPostgresqlProfile">resetPostgresqlProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetPrivateConnectivity">resetPrivateConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetSalesforceProfile">resetSalesforceProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetSpannerProfile">resetSpannerProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetSqlServerProfile">resetSqlServerProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBigqueryProfile` <a name="putBigqueryProfile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putBigqueryProfile"></a>

```typescript
public putBigqueryProfile(value: GoogleDatastreamConnectionProfileBigqueryProfile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putBigqueryProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfile">GoogleDatastreamConnectionProfileBigqueryProfile</a>

---

##### `putForwardSshConnectivity` <a name="putForwardSshConnectivity" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putForwardSshConnectivity"></a>

```typescript
public putForwardSshConnectivity(value: GoogleDatastreamConnectionProfileForwardSshConnectivity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putForwardSshConnectivity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity">GoogleDatastreamConnectionProfileForwardSshConnectivity</a>

---

##### `putGcsProfile` <a name="putGcsProfile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putGcsProfile"></a>

```typescript
public putGcsProfile(value: GoogleDatastreamConnectionProfileGcsProfile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putGcsProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile">GoogleDatastreamConnectionProfileGcsProfile</a>

---

##### `putMongodbProfile` <a name="putMongodbProfile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putMongodbProfile"></a>

```typescript
public putMongodbProfile(value: GoogleDatastreamConnectionProfileMongodbProfile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putMongodbProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfile">GoogleDatastreamConnectionProfileMongodbProfile</a>

---

##### `putMysqlProfile` <a name="putMysqlProfile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putMysqlProfile"></a>

```typescript
public putMysqlProfile(value: GoogleDatastreamConnectionProfileMysqlProfile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putMysqlProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile">GoogleDatastreamConnectionProfileMysqlProfile</a>

---

##### `putOracleProfile` <a name="putOracleProfile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putOracleProfile"></a>

```typescript
public putOracleProfile(value: GoogleDatastreamConnectionProfileOracleProfile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putOracleProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile">GoogleDatastreamConnectionProfileOracleProfile</a>

---

##### `putPostgresqlProfile` <a name="putPostgresqlProfile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putPostgresqlProfile"></a>

```typescript
public putPostgresqlProfile(value: GoogleDatastreamConnectionProfilePostgresqlProfile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putPostgresqlProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile">GoogleDatastreamConnectionProfilePostgresqlProfile</a>

---

##### `putPrivateConnectivity` <a name="putPrivateConnectivity" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putPrivateConnectivity"></a>

```typescript
public putPrivateConnectivity(value: GoogleDatastreamConnectionProfilePrivateConnectivity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putPrivateConnectivity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity">GoogleDatastreamConnectionProfilePrivateConnectivity</a>

---

##### `putSalesforceProfile` <a name="putSalesforceProfile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putSalesforceProfile"></a>

```typescript
public putSalesforceProfile(value: GoogleDatastreamConnectionProfileSalesforceProfile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putSalesforceProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfile">GoogleDatastreamConnectionProfileSalesforceProfile</a>

---

##### `putSpannerProfile` <a name="putSpannerProfile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putSpannerProfile"></a>

```typescript
public putSpannerProfile(value: GoogleDatastreamConnectionProfileSpannerProfile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putSpannerProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfile">GoogleDatastreamConnectionProfileSpannerProfile</a>

---

##### `putSqlServerProfile` <a name="putSqlServerProfile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putSqlServerProfile"></a>

```typescript
public putSqlServerProfile(value: GoogleDatastreamConnectionProfileSqlServerProfile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putSqlServerProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile">GoogleDatastreamConnectionProfileSqlServerProfile</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleDatastreamConnectionProfileTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts">GoogleDatastreamConnectionProfileTimeouts</a>

---

##### `resetBigqueryProfile` <a name="resetBigqueryProfile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetBigqueryProfile"></a>

```typescript
public resetBigqueryProfile(): void
```

##### `resetCreateWithoutValidation` <a name="resetCreateWithoutValidation" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetCreateWithoutValidation"></a>

```typescript
public resetCreateWithoutValidation(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetForwardSshConnectivity` <a name="resetForwardSshConnectivity" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetForwardSshConnectivity"></a>

```typescript
public resetForwardSshConnectivity(): void
```

##### `resetGcsProfile` <a name="resetGcsProfile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetGcsProfile"></a>

```typescript
public resetGcsProfile(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMongodbProfile` <a name="resetMongodbProfile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetMongodbProfile"></a>

```typescript
public resetMongodbProfile(): void
```

##### `resetMysqlProfile` <a name="resetMysqlProfile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetMysqlProfile"></a>

```typescript
public resetMysqlProfile(): void
```

##### `resetOracleProfile` <a name="resetOracleProfile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetOracleProfile"></a>

```typescript
public resetOracleProfile(): void
```

##### `resetPostgresqlProfile` <a name="resetPostgresqlProfile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetPostgresqlProfile"></a>

```typescript
public resetPostgresqlProfile(): void
```

##### `resetPrivateConnectivity` <a name="resetPrivateConnectivity" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetPrivateConnectivity"></a>

```typescript
public resetPrivateConnectivity(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSalesforceProfile` <a name="resetSalesforceProfile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetSalesforceProfile"></a>

```typescript
public resetSalesforceProfile(): void
```

##### `resetSpannerProfile` <a name="resetSpannerProfile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetSpannerProfile"></a>

```typescript
public resetSpannerProfile(): void
```

##### `resetSqlServerProfile` <a name="resetSqlServerProfile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetSqlServerProfile"></a>

```typescript
public resetSqlServerProfile(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDatastreamConnectionProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.isConstruct"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktn/provider-google-beta'

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.isTerraformElement"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktn/provider-google-beta'

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.isTerraformResource"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktn/provider-google-beta'

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.generateConfigForImport"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktn/provider-google-beta'

googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleDatastreamConnectionProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDatastreamConnectionProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDatastreamConnectionProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDatastreamConnectionProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.bigqueryProfile">bigqueryProfile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference">GoogleDatastreamConnectionProfileBigqueryProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.forwardSshConnectivity">forwardSshConnectivity</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference">GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.gcsProfile">gcsProfile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference">GoogleDatastreamConnectionProfileGcsProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.mongodbProfile">mongodbProfile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference">GoogleDatastreamConnectionProfileMongodbProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.mysqlProfile">mysqlProfile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference">GoogleDatastreamConnectionProfileMysqlProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.oracleProfile">oracleProfile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference">GoogleDatastreamConnectionProfileOracleProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.postgresqlProfile">postgresqlProfile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference">GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.privateConnectivity">privateConnectivity</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference">GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.salesforceProfile">salesforceProfile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference">GoogleDatastreamConnectionProfileSalesforceProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.spannerProfile">spannerProfile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference">GoogleDatastreamConnectionProfileSpannerProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.sqlServerProfile">sqlServerProfile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference">GoogleDatastreamConnectionProfileSqlServerProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference">GoogleDatastreamConnectionProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.bigqueryProfileInput">bigqueryProfileInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfile">GoogleDatastreamConnectionProfileBigqueryProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.connectionProfileIdInput">connectionProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.createWithoutValidationInput">createWithoutValidationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.forwardSshConnectivityInput">forwardSshConnectivityInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity">GoogleDatastreamConnectionProfileForwardSshConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.gcsProfileInput">gcsProfileInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile">GoogleDatastreamConnectionProfileGcsProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.mongodbProfileInput">mongodbProfileInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfile">GoogleDatastreamConnectionProfileMongodbProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.mysqlProfileInput">mysqlProfileInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile">GoogleDatastreamConnectionProfileMysqlProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.oracleProfileInput">oracleProfileInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile">GoogleDatastreamConnectionProfileOracleProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.postgresqlProfileInput">postgresqlProfileInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile">GoogleDatastreamConnectionProfilePostgresqlProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.privateConnectivityInput">privateConnectivityInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity">GoogleDatastreamConnectionProfilePrivateConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.salesforceProfileInput">salesforceProfileInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfile">GoogleDatastreamConnectionProfileSalesforceProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.spannerProfileInput">spannerProfileInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfile">GoogleDatastreamConnectionProfileSpannerProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.sqlServerProfileInput">sqlServerProfileInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile">GoogleDatastreamConnectionProfileSqlServerProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts">GoogleDatastreamConnectionProfileTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.connectionProfileId">connectionProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.createWithoutValidation">createWithoutValidation</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `bigqueryProfile`<sup>Required</sup> <a name="bigqueryProfile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.bigqueryProfile"></a>

```typescript
public readonly bigqueryProfile: GoogleDatastreamConnectionProfileBigqueryProfileOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference">GoogleDatastreamConnectionProfileBigqueryProfileOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `forwardSshConnectivity`<sup>Required</sup> <a name="forwardSshConnectivity" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.forwardSshConnectivity"></a>

```typescript
public readonly forwardSshConnectivity: GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference">GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference</a>

---

##### `gcsProfile`<sup>Required</sup> <a name="gcsProfile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.gcsProfile"></a>

```typescript
public readonly gcsProfile: GoogleDatastreamConnectionProfileGcsProfileOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference">GoogleDatastreamConnectionProfileGcsProfileOutputReference</a>

---

##### `mongodbProfile`<sup>Required</sup> <a name="mongodbProfile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.mongodbProfile"></a>

```typescript
public readonly mongodbProfile: GoogleDatastreamConnectionProfileMongodbProfileOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference">GoogleDatastreamConnectionProfileMongodbProfileOutputReference</a>

---

##### `mysqlProfile`<sup>Required</sup> <a name="mysqlProfile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.mysqlProfile"></a>

```typescript
public readonly mysqlProfile: GoogleDatastreamConnectionProfileMysqlProfileOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference">GoogleDatastreamConnectionProfileMysqlProfileOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `oracleProfile`<sup>Required</sup> <a name="oracleProfile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.oracleProfile"></a>

```typescript
public readonly oracleProfile: GoogleDatastreamConnectionProfileOracleProfileOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference">GoogleDatastreamConnectionProfileOracleProfileOutputReference</a>

---

##### `postgresqlProfile`<sup>Required</sup> <a name="postgresqlProfile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.postgresqlProfile"></a>

```typescript
public readonly postgresqlProfile: GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference">GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference</a>

---

##### `privateConnectivity`<sup>Required</sup> <a name="privateConnectivity" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.privateConnectivity"></a>

```typescript
public readonly privateConnectivity: GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference">GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference</a>

---

##### `salesforceProfile`<sup>Required</sup> <a name="salesforceProfile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.salesforceProfile"></a>

```typescript
public readonly salesforceProfile: GoogleDatastreamConnectionProfileSalesforceProfileOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference">GoogleDatastreamConnectionProfileSalesforceProfileOutputReference</a>

---

##### `spannerProfile`<sup>Required</sup> <a name="spannerProfile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.spannerProfile"></a>

```typescript
public readonly spannerProfile: GoogleDatastreamConnectionProfileSpannerProfileOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference">GoogleDatastreamConnectionProfileSpannerProfileOutputReference</a>

---

##### `sqlServerProfile`<sup>Required</sup> <a name="sqlServerProfile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.sqlServerProfile"></a>

```typescript
public readonly sqlServerProfile: GoogleDatastreamConnectionProfileSqlServerProfileOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference">GoogleDatastreamConnectionProfileSqlServerProfileOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDatastreamConnectionProfileTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference">GoogleDatastreamConnectionProfileTimeoutsOutputReference</a>

---

##### `bigqueryProfileInput`<sup>Optional</sup> <a name="bigqueryProfileInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.bigqueryProfileInput"></a>

```typescript
public readonly bigqueryProfileInput: GoogleDatastreamConnectionProfileBigqueryProfile;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfile">GoogleDatastreamConnectionProfileBigqueryProfile</a>

---

##### `connectionProfileIdInput`<sup>Optional</sup> <a name="connectionProfileIdInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.connectionProfileIdInput"></a>

```typescript
public readonly connectionProfileIdInput: string;
```

- *Type:* string

---

##### `createWithoutValidationInput`<sup>Optional</sup> <a name="createWithoutValidationInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.createWithoutValidationInput"></a>

```typescript
public readonly createWithoutValidationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `forwardSshConnectivityInput`<sup>Optional</sup> <a name="forwardSshConnectivityInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.forwardSshConnectivityInput"></a>

```typescript
public readonly forwardSshConnectivityInput: GoogleDatastreamConnectionProfileForwardSshConnectivity;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity">GoogleDatastreamConnectionProfileForwardSshConnectivity</a>

---

##### `gcsProfileInput`<sup>Optional</sup> <a name="gcsProfileInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.gcsProfileInput"></a>

```typescript
public readonly gcsProfileInput: GoogleDatastreamConnectionProfileGcsProfile;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile">GoogleDatastreamConnectionProfileGcsProfile</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `mongodbProfileInput`<sup>Optional</sup> <a name="mongodbProfileInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.mongodbProfileInput"></a>

```typescript
public readonly mongodbProfileInput: GoogleDatastreamConnectionProfileMongodbProfile;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfile">GoogleDatastreamConnectionProfileMongodbProfile</a>

---

##### `mysqlProfileInput`<sup>Optional</sup> <a name="mysqlProfileInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.mysqlProfileInput"></a>

```typescript
public readonly mysqlProfileInput: GoogleDatastreamConnectionProfileMysqlProfile;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile">GoogleDatastreamConnectionProfileMysqlProfile</a>

---

##### `oracleProfileInput`<sup>Optional</sup> <a name="oracleProfileInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.oracleProfileInput"></a>

```typescript
public readonly oracleProfileInput: GoogleDatastreamConnectionProfileOracleProfile;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile">GoogleDatastreamConnectionProfileOracleProfile</a>

---

##### `postgresqlProfileInput`<sup>Optional</sup> <a name="postgresqlProfileInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.postgresqlProfileInput"></a>

```typescript
public readonly postgresqlProfileInput: GoogleDatastreamConnectionProfilePostgresqlProfile;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile">GoogleDatastreamConnectionProfilePostgresqlProfile</a>

---

##### `privateConnectivityInput`<sup>Optional</sup> <a name="privateConnectivityInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.privateConnectivityInput"></a>

```typescript
public readonly privateConnectivityInput: GoogleDatastreamConnectionProfilePrivateConnectivity;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity">GoogleDatastreamConnectionProfilePrivateConnectivity</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `salesforceProfileInput`<sup>Optional</sup> <a name="salesforceProfileInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.salesforceProfileInput"></a>

```typescript
public readonly salesforceProfileInput: GoogleDatastreamConnectionProfileSalesforceProfile;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfile">GoogleDatastreamConnectionProfileSalesforceProfile</a>

---

##### `spannerProfileInput`<sup>Optional</sup> <a name="spannerProfileInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.spannerProfileInput"></a>

```typescript
public readonly spannerProfileInput: GoogleDatastreamConnectionProfileSpannerProfile;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfile">GoogleDatastreamConnectionProfileSpannerProfile</a>

---

##### `sqlServerProfileInput`<sup>Optional</sup> <a name="sqlServerProfileInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.sqlServerProfileInput"></a>

```typescript
public readonly sqlServerProfileInput: GoogleDatastreamConnectionProfileSqlServerProfile;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile">GoogleDatastreamConnectionProfileSqlServerProfile</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleDatastreamConnectionProfileTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts">GoogleDatastreamConnectionProfileTimeouts</a>

---

##### `connectionProfileId`<sup>Required</sup> <a name="connectionProfileId" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.connectionProfileId"></a>

```typescript
public readonly connectionProfileId: string;
```

- *Type:* string

---

##### `createWithoutValidation`<sup>Required</sup> <a name="createWithoutValidation" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.createWithoutValidation"></a>

```typescript
public readonly createWithoutValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDatastreamConnectionProfileBigqueryProfile <a name="GoogleDatastreamConnectionProfileBigqueryProfile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfile.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktn/provider-google-beta'

const googleDatastreamConnectionProfileBigqueryProfile: googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfile = { ... }
```


### GoogleDatastreamConnectionProfileConfig <a name="GoogleDatastreamConnectionProfileConfig" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktn/provider-google-beta'

const googleDatastreamConnectionProfileConfig: googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.connectionProfileId">connectionProfileId</a></code> | <code>string</code> | The connection profile identifier. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.displayName">displayName</a></code> | <code>string</code> | Display name. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.location">location</a></code> | <code>string</code> | The name of the location this connection profile is located in. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.bigqueryProfile">bigqueryProfile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfile">GoogleDatastreamConnectionProfileBigqueryProfile</a></code> | bigquery_profile block. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.createWithoutValidation">createWithoutValidation</a></code> | <code>boolean \| cdktn.IResolvable</code> | Create the connection profile without validating it. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.forwardSshConnectivity">forwardSshConnectivity</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity">GoogleDatastreamConnectionProfileForwardSshConnectivity</a></code> | forward_ssh_connectivity block. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.gcsProfile">gcsProfile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile">GoogleDatastreamConnectionProfileGcsProfile</a></code> | gcs_profile block. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#id GoogleDatastreamConnectionProfile#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.mongodbProfile">mongodbProfile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfile">GoogleDatastreamConnectionProfileMongodbProfile</a></code> | mongodb_profile block. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.mysqlProfile">mysqlProfile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile">GoogleDatastreamConnectionProfileMysqlProfile</a></code> | mysql_profile block. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.oracleProfile">oracleProfile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile">GoogleDatastreamConnectionProfileOracleProfile</a></code> | oracle_profile block. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.postgresqlProfile">postgresqlProfile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile">GoogleDatastreamConnectionProfilePostgresqlProfile</a></code> | postgresql_profile block. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.privateConnectivity">privateConnectivity</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity">GoogleDatastreamConnectionProfilePrivateConnectivity</a></code> | private_connectivity block. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#project GoogleDatastreamConnectionProfile#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.salesforceProfile">salesforceProfile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfile">GoogleDatastreamConnectionProfileSalesforceProfile</a></code> | salesforce_profile block. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.spannerProfile">spannerProfile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfile">GoogleDatastreamConnectionProfileSpannerProfile</a></code> | spanner_profile block. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.sqlServerProfile">sqlServerProfile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile">GoogleDatastreamConnectionProfileSqlServerProfile</a></code> | sql_server_profile block. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts">GoogleDatastreamConnectionProfileTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `connectionProfileId`<sup>Required</sup> <a name="connectionProfileId" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.connectionProfileId"></a>

```typescript
public readonly connectionProfileId: string;
```

- *Type:* string

The connection profile identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#connection_profile_id GoogleDatastreamConnectionProfile#connection_profile_id}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#display_name GoogleDatastreamConnectionProfile#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The name of the location this connection profile is located in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#location GoogleDatastreamConnectionProfile#location}

---

##### `bigqueryProfile`<sup>Optional</sup> <a name="bigqueryProfile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.bigqueryProfile"></a>

```typescript
public readonly bigqueryProfile: GoogleDatastreamConnectionProfileBigqueryProfile;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfile">GoogleDatastreamConnectionProfileBigqueryProfile</a>

bigquery_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#bigquery_profile GoogleDatastreamConnectionProfile#bigquery_profile}

---

##### `createWithoutValidation`<sup>Optional</sup> <a name="createWithoutValidation" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.createWithoutValidation"></a>

```typescript
public readonly createWithoutValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Create the connection profile without validating it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#create_without_validation GoogleDatastreamConnectionProfile#create_without_validation}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#deletion_policy GoogleDatastreamConnectionProfile#deletion_policy}

---

##### `forwardSshConnectivity`<sup>Optional</sup> <a name="forwardSshConnectivity" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.forwardSshConnectivity"></a>

```typescript
public readonly forwardSshConnectivity: GoogleDatastreamConnectionProfileForwardSshConnectivity;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity">GoogleDatastreamConnectionProfileForwardSshConnectivity</a>

forward_ssh_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#forward_ssh_connectivity GoogleDatastreamConnectionProfile#forward_ssh_connectivity}

---

##### `gcsProfile`<sup>Optional</sup> <a name="gcsProfile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.gcsProfile"></a>

```typescript
public readonly gcsProfile: GoogleDatastreamConnectionProfileGcsProfile;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile">GoogleDatastreamConnectionProfileGcsProfile</a>

gcs_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#gcs_profile GoogleDatastreamConnectionProfile#gcs_profile}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#id GoogleDatastreamConnectionProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#labels GoogleDatastreamConnectionProfile#labels}

---

##### `mongodbProfile`<sup>Optional</sup> <a name="mongodbProfile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.mongodbProfile"></a>

```typescript
public readonly mongodbProfile: GoogleDatastreamConnectionProfileMongodbProfile;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfile">GoogleDatastreamConnectionProfileMongodbProfile</a>

mongodb_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#mongodb_profile GoogleDatastreamConnectionProfile#mongodb_profile}

---

##### `mysqlProfile`<sup>Optional</sup> <a name="mysqlProfile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.mysqlProfile"></a>

```typescript
public readonly mysqlProfile: GoogleDatastreamConnectionProfileMysqlProfile;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile">GoogleDatastreamConnectionProfileMysqlProfile</a>

mysql_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#mysql_profile GoogleDatastreamConnectionProfile#mysql_profile}

---

##### `oracleProfile`<sup>Optional</sup> <a name="oracleProfile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.oracleProfile"></a>

```typescript
public readonly oracleProfile: GoogleDatastreamConnectionProfileOracleProfile;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile">GoogleDatastreamConnectionProfileOracleProfile</a>

oracle_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#oracle_profile GoogleDatastreamConnectionProfile#oracle_profile}

---

##### `postgresqlProfile`<sup>Optional</sup> <a name="postgresqlProfile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.postgresqlProfile"></a>

```typescript
public readonly postgresqlProfile: GoogleDatastreamConnectionProfilePostgresqlProfile;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile">GoogleDatastreamConnectionProfilePostgresqlProfile</a>

postgresql_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#postgresql_profile GoogleDatastreamConnectionProfile#postgresql_profile}

---

##### `privateConnectivity`<sup>Optional</sup> <a name="privateConnectivity" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.privateConnectivity"></a>

```typescript
public readonly privateConnectivity: GoogleDatastreamConnectionProfilePrivateConnectivity;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity">GoogleDatastreamConnectionProfilePrivateConnectivity</a>

private_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#private_connectivity GoogleDatastreamConnectionProfile#private_connectivity}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#project GoogleDatastreamConnectionProfile#project}.

---

##### `salesforceProfile`<sup>Optional</sup> <a name="salesforceProfile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.salesforceProfile"></a>

```typescript
public readonly salesforceProfile: GoogleDatastreamConnectionProfileSalesforceProfile;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfile">GoogleDatastreamConnectionProfileSalesforceProfile</a>

salesforce_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#salesforce_profile GoogleDatastreamConnectionProfile#salesforce_profile}

---

##### `spannerProfile`<sup>Optional</sup> <a name="spannerProfile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.spannerProfile"></a>

```typescript
public readonly spannerProfile: GoogleDatastreamConnectionProfileSpannerProfile;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfile">GoogleDatastreamConnectionProfileSpannerProfile</a>

spanner_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#spanner_profile GoogleDatastreamConnectionProfile#spanner_profile}

---

##### `sqlServerProfile`<sup>Optional</sup> <a name="sqlServerProfile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.sqlServerProfile"></a>

```typescript
public readonly sqlServerProfile: GoogleDatastreamConnectionProfileSqlServerProfile;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile">GoogleDatastreamConnectionProfileSqlServerProfile</a>

sql_server_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#sql_server_profile GoogleDatastreamConnectionProfile#sql_server_profile}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDatastreamConnectionProfileTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts">GoogleDatastreamConnectionProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#timeouts GoogleDatastreamConnectionProfile#timeouts}

---

### GoogleDatastreamConnectionProfileForwardSshConnectivity <a name="GoogleDatastreamConnectionProfileForwardSshConnectivity" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktn/provider-google-beta'

const googleDatastreamConnectionProfileForwardSshConnectivity: googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity.property.hostname">hostname</a></code> | <code>string</code> | Hostname for the SSH tunnel. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity.property.username">username</a></code> | <code>string</code> | Username for the SSH tunnel. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity.property.password">password</a></code> | <code>string</code> | SSH password. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity.property.port">port</a></code> | <code>number</code> | Port for the SSH tunnel. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity.property.privateKey">privateKey</a></code> | <code>string</code> | SSH private key. |

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

Hostname for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#hostname GoogleDatastreamConnectionProfile#hostname}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Username for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#username GoogleDatastreamConnectionProfile#username}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

SSH password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#password GoogleDatastreamConnectionProfile#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Port for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#port GoogleDatastreamConnectionProfile#port}

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

SSH private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#private_key GoogleDatastreamConnectionProfile#private_key}

---

### GoogleDatastreamConnectionProfileGcsProfile <a name="GoogleDatastreamConnectionProfileGcsProfile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktn/provider-google-beta'

const googleDatastreamConnectionProfileGcsProfile: googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile.property.bucket">bucket</a></code> | <code>string</code> | The Cloud Storage bucket name. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile.property.rootPath">rootPath</a></code> | <code>string</code> | The root path inside the Cloud Storage bucket. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

The Cloud Storage bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#bucket GoogleDatastreamConnectionProfile#bucket}

---

##### `rootPath`<sup>Optional</sup> <a name="rootPath" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile.property.rootPath"></a>

```typescript
public readonly rootPath: string;
```

- *Type:* string

The root path inside the Cloud Storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#root_path GoogleDatastreamConnectionProfile#root_path}

---

### GoogleDatastreamConnectionProfileMongodbProfile <a name="GoogleDatastreamConnectionProfileMongodbProfile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfile.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktn/provider-google-beta'

const googleDatastreamConnectionProfileMongodbProfile: googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfile.property.hostAddresses">hostAddresses</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddresses">GoogleDatastreamConnectionProfileMongodbProfileHostAddresses</a>[]</code> | host_addresses block. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfile.property.username">username</a></code> | <code>string</code> | Username for the MongoDB connection. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfile.property.password">password</a></code> | <code>string</code> | Password for the MongoDB connection. Mutually exclusive with secretManagerStoredPassword. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfile.property.replicaSet">replicaSet</a></code> | <code>string</code> | Name of the replica set. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfile.property.secretManagerStoredPassword">secretManagerStoredPassword</a></code> | <code>string</code> | A reference to a Secret Manager resource name storing the MongoDB connection password. Mutually exclusive with password. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfile.property.srvConnectionFormat">srvConnectionFormat</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormat">GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormat</a></code> | srv_connection_format block. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfile.property.sslConfig">sslConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfig">GoogleDatastreamConnectionProfileMongodbProfileSslConfig</a></code> | ssl_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfile.property.standardConnectionFormat">standardConnectionFormat</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat">GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat</a></code> | standard_connection_format block. |

---

##### `hostAddresses`<sup>Required</sup> <a name="hostAddresses" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfile.property.hostAddresses"></a>

```typescript
public readonly hostAddresses: IResolvable | GoogleDatastreamConnectionProfileMongodbProfileHostAddresses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddresses">GoogleDatastreamConnectionProfileMongodbProfileHostAddresses</a>[]

host_addresses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#host_addresses GoogleDatastreamConnectionProfile#host_addresses}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfile.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Username for the MongoDB connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#username GoogleDatastreamConnectionProfile#username}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfile.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Password for the MongoDB connection. Mutually exclusive with secretManagerStoredPassword.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#password GoogleDatastreamConnectionProfile#password}

---

##### `replicaSet`<sup>Optional</sup> <a name="replicaSet" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfile.property.replicaSet"></a>

```typescript
public readonly replicaSet: string;
```

- *Type:* string

Name of the replica set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#replica_set GoogleDatastreamConnectionProfile#replica_set}

---

##### `secretManagerStoredPassword`<sup>Optional</sup> <a name="secretManagerStoredPassword" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfile.property.secretManagerStoredPassword"></a>

```typescript
public readonly secretManagerStoredPassword: string;
```

- *Type:* string

A reference to a Secret Manager resource name storing the MongoDB connection password. Mutually exclusive with password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#secret_manager_stored_password GoogleDatastreamConnectionProfile#secret_manager_stored_password}

---

##### `srvConnectionFormat`<sup>Optional</sup> <a name="srvConnectionFormat" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfile.property.srvConnectionFormat"></a>

```typescript
public readonly srvConnectionFormat: GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormat;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormat">GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormat</a>

srv_connection_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#srv_connection_format GoogleDatastreamConnectionProfile#srv_connection_format}

---

##### `sslConfig`<sup>Optional</sup> <a name="sslConfig" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfile.property.sslConfig"></a>

```typescript
public readonly sslConfig: GoogleDatastreamConnectionProfileMongodbProfileSslConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfig">GoogleDatastreamConnectionProfileMongodbProfileSslConfig</a>

ssl_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#ssl_config GoogleDatastreamConnectionProfile#ssl_config}

---

##### `standardConnectionFormat`<sup>Optional</sup> <a name="standardConnectionFormat" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfile.property.standardConnectionFormat"></a>

```typescript
public readonly standardConnectionFormat: GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat">GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat</a>

standard_connection_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#standard_connection_format GoogleDatastreamConnectionProfile#standard_connection_format}

---

### GoogleDatastreamConnectionProfileMongodbProfileHostAddresses <a name="GoogleDatastreamConnectionProfileMongodbProfileHostAddresses" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddresses.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktn/provider-google-beta'

const googleDatastreamConnectionProfileMongodbProfileHostAddresses: googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddresses = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddresses.property.hostname">hostname</a></code> | <code>string</code> | Hostname for the connection. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddresses.property.port">port</a></code> | <code>number</code> | Port for the connection. |

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddresses.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

Hostname for the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#hostname GoogleDatastreamConnectionProfile#hostname}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddresses.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Port for the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#port GoogleDatastreamConnectionProfile#port}

---

### GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormat <a name="GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormat" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormat.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktn/provider-google-beta'

const googleDatastreamConnectionProfileMongodbProfileSrvConnectionFormat: googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormat = { ... }
```


### GoogleDatastreamConnectionProfileMongodbProfileSslConfig <a name="GoogleDatastreamConnectionProfileMongodbProfileSslConfig" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfig.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktn/provider-google-beta'

const googleDatastreamConnectionProfileMongodbProfileSslConfig: googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfig.property.caCertificate">caCertificate</a></code> | <code>string</code> | PEM-encoded certificate of the CA that signed the source database server's certificate. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfig.property.clientCertificate">clientCertificate</a></code> | <code>string</code> | PEM-encoded certificate that will be used by the replica to authenticate against the source database server. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfig.property.clientKey">clientKey</a></code> | <code>string</code> | PEM-encoded private key associated with the Client Certificate. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfig.property.secretManagerStoredClientKey">secretManagerStoredClientKey</a></code> | <code>string</code> | A reference to a Secret Manager resource name storing the PEM-encoded private key. Mutually exclusive with clientKey. |

---

##### `caCertificate`<sup>Optional</sup> <a name="caCertificate" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfig.property.caCertificate"></a>

```typescript
public readonly caCertificate: string;
```

- *Type:* string

PEM-encoded certificate of the CA that signed the source database server's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#ca_certificate GoogleDatastreamConnectionProfile#ca_certificate}

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfig.property.clientCertificate"></a>

```typescript
public readonly clientCertificate: string;
```

- *Type:* string

PEM-encoded certificate that will be used by the replica to authenticate against the source database server.

If this field
is used then the 'clientKey' and the 'caCertificate' fields are
mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#client_certificate GoogleDatastreamConnectionProfile#client_certificate}

---

##### `clientKey`<sup>Optional</sup> <a name="clientKey" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfig.property.clientKey"></a>

```typescript
public readonly clientKey: string;
```

- *Type:* string

PEM-encoded private key associated with the Client Certificate.

If this field is used then the 'client_certificate' and the
'ca_certificate' fields are mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#client_key GoogleDatastreamConnectionProfile#client_key}

---

##### `secretManagerStoredClientKey`<sup>Optional</sup> <a name="secretManagerStoredClientKey" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfig.property.secretManagerStoredClientKey"></a>

```typescript
public readonly secretManagerStoredClientKey: string;
```

- *Type:* string

A reference to a Secret Manager resource name storing the PEM-encoded private key. Mutually exclusive with clientKey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#secret_manager_stored_client_key GoogleDatastreamConnectionProfile#secret_manager_stored_client_key}

---

### GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat <a name="GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktn/provider-google-beta'

const googleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat: googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat.property.directConnection">directConnection</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether the client connects directly to the host[:port] in the connection URI. |

---

##### `directConnection`<sup>Optional</sup> <a name="directConnection" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat.property.directConnection"></a>

```typescript
public readonly directConnection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether the client connects directly to the host[:port] in the connection URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#direct_connection GoogleDatastreamConnectionProfile#direct_connection}

---

### GoogleDatastreamConnectionProfileMysqlProfile <a name="GoogleDatastreamConnectionProfileMysqlProfile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktn/provider-google-beta'

const googleDatastreamConnectionProfileMysqlProfile: googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.property.hostname">hostname</a></code> | <code>string</code> | Hostname for the MySQL connection. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.property.username">username</a></code> | <code>string</code> | Username for the MySQL connection. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.property.password">password</a></code> | <code>string</code> | Password for the MySQL connection. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.property.port">port</a></code> | <code>number</code> | Port for the MySQL connection. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.property.secretManagerStoredPassword">secretManagerStoredPassword</a></code> | <code>string</code> | A reference to a Secret Manager resource name storing the user's password. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.property.sslConfig">sslConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig">GoogleDatastreamConnectionProfileMysqlProfileSslConfig</a></code> | ssl_config block. |

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

Hostname for the MySQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#hostname GoogleDatastreamConnectionProfile#hostname}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Username for the MySQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#username GoogleDatastreamConnectionProfile#username}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Password for the MySQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#password GoogleDatastreamConnectionProfile#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Port for the MySQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#port GoogleDatastreamConnectionProfile#port}

---

##### `secretManagerStoredPassword`<sup>Optional</sup> <a name="secretManagerStoredPassword" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.property.secretManagerStoredPassword"></a>

```typescript
public readonly secretManagerStoredPassword: string;
```

- *Type:* string

A reference to a Secret Manager resource name storing the user's password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#secret_manager_stored_password GoogleDatastreamConnectionProfile#secret_manager_stored_password}

---

##### `sslConfig`<sup>Optional</sup> <a name="sslConfig" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile.property.sslConfig"></a>

```typescript
public readonly sslConfig: GoogleDatastreamConnectionProfileMysqlProfileSslConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig">GoogleDatastreamConnectionProfileMysqlProfileSslConfig</a>

ssl_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#ssl_config GoogleDatastreamConnectionProfile#ssl_config}

---

### GoogleDatastreamConnectionProfileMysqlProfileSslConfig <a name="GoogleDatastreamConnectionProfileMysqlProfileSslConfig" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktn/provider-google-beta'

const googleDatastreamConnectionProfileMysqlProfileSslConfig: googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig.property.caCertificate">caCertificate</a></code> | <code>string</code> | PEM-encoded certificate of the CA that signed the source database server's certificate. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig.property.clientCertificate">clientCertificate</a></code> | <code>string</code> | PEM-encoded certificate that will be used by the replica to authenticate against the source database server. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig.property.clientKey">clientKey</a></code> | <code>string</code> | PEM-encoded private key associated with the Client Certificate. |

---

##### `caCertificate`<sup>Optional</sup> <a name="caCertificate" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig.property.caCertificate"></a>

```typescript
public readonly caCertificate: string;
```

- *Type:* string

PEM-encoded certificate of the CA that signed the source database server's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#ca_certificate GoogleDatastreamConnectionProfile#ca_certificate}

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig.property.clientCertificate"></a>

```typescript
public readonly clientCertificate: string;
```

- *Type:* string

PEM-encoded certificate that will be used by the replica to authenticate against the source database server.

If this field
is used then the 'clientKey' and the 'caCertificate' fields are
mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#client_certificate GoogleDatastreamConnectionProfile#client_certificate}

---

##### `clientKey`<sup>Optional</sup> <a name="clientKey" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig.property.clientKey"></a>

```typescript
public readonly clientKey: string;
```

- *Type:* string

PEM-encoded private key associated with the Client Certificate.

If this field is used then the 'client_certificate' and the
'ca_certificate' fields are mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#client_key GoogleDatastreamConnectionProfile#client_key}

---

### GoogleDatastreamConnectionProfileOracleProfile <a name="GoogleDatastreamConnectionProfileOracleProfile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktn/provider-google-beta'

const googleDatastreamConnectionProfileOracleProfile: googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.databaseService">databaseService</a></code> | <code>string</code> | Database for the Oracle connection. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.hostname">hostname</a></code> | <code>string</code> | Hostname for the Oracle connection. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.username">username</a></code> | <code>string</code> | Username for the Oracle connection. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.connectionAttributes">connectionAttributes</a></code> | <code>{[ key: string ]: string}</code> | Connection string attributes. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.password">password</a></code> | <code>string</code> | Password for the Oracle connection. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.port">port</a></code> | <code>number</code> | Port for the Oracle connection. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.secretManagerStoredPassword">secretManagerStoredPassword</a></code> | <code>string</code> | A reference to a Secret Manager resource name storing the user's password. |

---

##### `databaseService`<sup>Required</sup> <a name="databaseService" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.databaseService"></a>

```typescript
public readonly databaseService: string;
```

- *Type:* string

Database for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#database_service GoogleDatastreamConnectionProfile#database_service}

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

Hostname for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#hostname GoogleDatastreamConnectionProfile#hostname}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Username for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#username GoogleDatastreamConnectionProfile#username}

---

##### `connectionAttributes`<sup>Optional</sup> <a name="connectionAttributes" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.connectionAttributes"></a>

```typescript
public readonly connectionAttributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Connection string attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#connection_attributes GoogleDatastreamConnectionProfile#connection_attributes}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Password for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#password GoogleDatastreamConnectionProfile#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Port for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#port GoogleDatastreamConnectionProfile#port}

---

##### `secretManagerStoredPassword`<sup>Optional</sup> <a name="secretManagerStoredPassword" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile.property.secretManagerStoredPassword"></a>

```typescript
public readonly secretManagerStoredPassword: string;
```

- *Type:* string

A reference to a Secret Manager resource name storing the user's password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#secret_manager_stored_password GoogleDatastreamConnectionProfile#secret_manager_stored_password}

---

### GoogleDatastreamConnectionProfilePostgresqlProfile <a name="GoogleDatastreamConnectionProfilePostgresqlProfile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktn/provider-google-beta'

const googleDatastreamConnectionProfilePostgresqlProfile: googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.database">database</a></code> | <code>string</code> | Database for the PostgreSQL connection. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.hostname">hostname</a></code> | <code>string</code> | Hostname for the PostgreSQL connection. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.username">username</a></code> | <code>string</code> | Username for the PostgreSQL connection. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.password">password</a></code> | <code>string</code> | Password for the PostgreSQL connection. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.port">port</a></code> | <code>number</code> | Port for the PostgreSQL connection. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.secretManagerStoredPassword">secretManagerStoredPassword</a></code> | <code>string</code> | A reference to a Secret Manager resource name storing the user's password. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.sslConfig">sslConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig">GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig</a></code> | ssl_config block. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

Database for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#database GoogleDatastreamConnectionProfile#database}

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

Hostname for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#hostname GoogleDatastreamConnectionProfile#hostname}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Username for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#username GoogleDatastreamConnectionProfile#username}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Password for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#password GoogleDatastreamConnectionProfile#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Port for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#port GoogleDatastreamConnectionProfile#port}

---

##### `secretManagerStoredPassword`<sup>Optional</sup> <a name="secretManagerStoredPassword" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.secretManagerStoredPassword"></a>

```typescript
public readonly secretManagerStoredPassword: string;
```

- *Type:* string

A reference to a Secret Manager resource name storing the user's password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#secret_manager_stored_password GoogleDatastreamConnectionProfile#secret_manager_stored_password}

---

##### `sslConfig`<sup>Optional</sup> <a name="sslConfig" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile.property.sslConfig"></a>

```typescript
public readonly sslConfig: GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig">GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig</a>

ssl_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#ssl_config GoogleDatastreamConnectionProfile#ssl_config}

---

### GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig <a name="GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktn/provider-google-beta'

const googleDatastreamConnectionProfilePostgresqlProfileSslConfig: googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig.property.serverAndClientVerification">serverAndClientVerification</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification">GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification</a></code> | server_and_client_verification block. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig.property.serverVerification">serverVerification</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification">GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification</a></code> | server_verification block. |

---

##### `serverAndClientVerification`<sup>Optional</sup> <a name="serverAndClientVerification" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig.property.serverAndClientVerification"></a>

```typescript
public readonly serverAndClientVerification: GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification">GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification</a>

server_and_client_verification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#server_and_client_verification GoogleDatastreamConnectionProfile#server_and_client_verification}

---

##### `serverVerification`<sup>Optional</sup> <a name="serverVerification" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig.property.serverVerification"></a>

```typescript
public readonly serverVerification: GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification">GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification</a>

server_verification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#server_verification GoogleDatastreamConnectionProfile#server_verification}

---

### GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification <a name="GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktn/provider-google-beta'

const googleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification: googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification.property.caCertificate">caCertificate</a></code> | <code>string</code> | PEM-encoded server root CA certificate. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification.property.clientCertificate">clientCertificate</a></code> | <code>string</code> | PEM-encoded certificate used by the source database to authenticate the client identity (i.e., the Datastream's identity). This certificate is signed by either a root certificate trusted by the server or one or more intermediate certificates (which is stored with the leaf certificate) to link to this certificate to the trusted root certificate. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification.property.clientKey">clientKey</a></code> | <code>string</code> | PEM-encoded private key associated with the client certificate. |

---

##### `caCertificate`<sup>Required</sup> <a name="caCertificate" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification.property.caCertificate"></a>

```typescript
public readonly caCertificate: string;
```

- *Type:* string

PEM-encoded server root CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#ca_certificate GoogleDatastreamConnectionProfile#ca_certificate}

---

##### `clientCertificate`<sup>Required</sup> <a name="clientCertificate" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification.property.clientCertificate"></a>

```typescript
public readonly clientCertificate: string;
```

- *Type:* string

PEM-encoded certificate used by the source database to authenticate the client identity (i.e., the Datastream's identity). This certificate is signed by either a root certificate trusted by the server or one or more intermediate certificates (which is stored with the leaf certificate) to link to this certificate to the trusted root certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#client_certificate GoogleDatastreamConnectionProfile#client_certificate}

---

##### `clientKey`<sup>Required</sup> <a name="clientKey" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification.property.clientKey"></a>

```typescript
public readonly clientKey: string;
```

- *Type:* string

PEM-encoded private key associated with the client certificate.

This value will be used during the SSL/TLS handshake, allowing
the PostgreSQL server to authenticate the client's identity,
i.e. identity of the stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#client_key GoogleDatastreamConnectionProfile#client_key}

---

### GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification <a name="GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktn/provider-google-beta'

const googleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification: googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification.property.caCertificate">caCertificate</a></code> | <code>string</code> | PEM-encoded server root CA certificate. |

---

##### `caCertificate`<sup>Required</sup> <a name="caCertificate" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification.property.caCertificate"></a>

```typescript
public readonly caCertificate: string;
```

- *Type:* string

PEM-encoded server root CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#ca_certificate GoogleDatastreamConnectionProfile#ca_certificate}

---

### GoogleDatastreamConnectionProfilePrivateConnectivity <a name="GoogleDatastreamConnectionProfilePrivateConnectivity" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktn/provider-google-beta'

const googleDatastreamConnectionProfilePrivateConnectivity: googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity.property.privateConnection">privateConnection</a></code> | <code>string</code> | A reference to a private connection resource. Format: 'projects/{project}/locations/{location}/privateConnections/{name}'. |

---

##### `privateConnection`<sup>Required</sup> <a name="privateConnection" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity.property.privateConnection"></a>

```typescript
public readonly privateConnection: string;
```

- *Type:* string

A reference to a private connection resource. Format: 'projects/{project}/locations/{location}/privateConnections/{name}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#private_connection GoogleDatastreamConnectionProfile#private_connection}

---

### GoogleDatastreamConnectionProfileSalesforceProfile <a name="GoogleDatastreamConnectionProfileSalesforceProfile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfile.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktn/provider-google-beta'

const googleDatastreamConnectionProfileSalesforceProfile: googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfile.property.domain">domain</a></code> | <code>string</code> | Domain for the Salesforce Org. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfile.property.oauth2ClientCredentials">oauth2ClientCredentials</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials">GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials</a></code> | oauth2_client_credentials block. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfile.property.userCredentials">userCredentials</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials">GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials</a></code> | user_credentials block. |

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfile.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

Domain for the Salesforce Org.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#domain GoogleDatastreamConnectionProfile#domain}

---

##### `oauth2ClientCredentials`<sup>Optional</sup> <a name="oauth2ClientCredentials" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfile.property.oauth2ClientCredentials"></a>

```typescript
public readonly oauth2ClientCredentials: GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials">GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials</a>

oauth2_client_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#oauth2_client_credentials GoogleDatastreamConnectionProfile#oauth2_client_credentials}

---

##### `userCredentials`<sup>Optional</sup> <a name="userCredentials" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfile.property.userCredentials"></a>

```typescript
public readonly userCredentials: GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials">GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials</a>

user_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#user_credentials GoogleDatastreamConnectionProfile#user_credentials}

---

### GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials <a name="GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktn/provider-google-beta'

const googleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials: googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials.property.clientId">clientId</a></code> | <code>string</code> | Client ID to use for authentication. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials.property.clientSecret">clientSecret</a></code> | <code>string</code> | Client secret to use for authentication. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials.property.secretManagerStoredClientSecret">secretManagerStoredClientSecret</a></code> | <code>string</code> | A reference to a Secret Manager resource name storing the client secret. |

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Client ID to use for authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#client_id GoogleDatastreamConnectionProfile#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

Client secret to use for authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#client_secret GoogleDatastreamConnectionProfile#client_secret}

---

##### `secretManagerStoredClientSecret`<sup>Optional</sup> <a name="secretManagerStoredClientSecret" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials.property.secretManagerStoredClientSecret"></a>

```typescript
public readonly secretManagerStoredClientSecret: string;
```

- *Type:* string

A reference to a Secret Manager resource name storing the client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#secret_manager_stored_client_secret GoogleDatastreamConnectionProfile#secret_manager_stored_client_secret}

---

### GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials <a name="GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktn/provider-google-beta'

const googleDatastreamConnectionProfileSalesforceProfileUserCredentials: googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials.property.password">password</a></code> | <code>string</code> | Password of the user. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials.property.secretManagerStoredPassword">secretManagerStoredPassword</a></code> | <code>string</code> | A reference to a Secret Manager resource name storing the user's password. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials.property.secretManagerStoredSecurityToken">secretManagerStoredSecurityToken</a></code> | <code>string</code> | A reference to a Secret Manager resource name storing the user's security token. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials.property.securityToken">securityToken</a></code> | <code>string</code> | Security token of the user. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials.property.username">username</a></code> | <code>string</code> | Username to use for authentication. |

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Password of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#password GoogleDatastreamConnectionProfile#password}

---

##### `secretManagerStoredPassword`<sup>Optional</sup> <a name="secretManagerStoredPassword" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials.property.secretManagerStoredPassword"></a>

```typescript
public readonly secretManagerStoredPassword: string;
```

- *Type:* string

A reference to a Secret Manager resource name storing the user's password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#secret_manager_stored_password GoogleDatastreamConnectionProfile#secret_manager_stored_password}

---

##### `secretManagerStoredSecurityToken`<sup>Optional</sup> <a name="secretManagerStoredSecurityToken" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials.property.secretManagerStoredSecurityToken"></a>

```typescript
public readonly secretManagerStoredSecurityToken: string;
```

- *Type:* string

A reference to a Secret Manager resource name storing the user's security token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#secret_manager_stored_security_token GoogleDatastreamConnectionProfile#secret_manager_stored_security_token}

---

##### `securityToken`<sup>Optional</sup> <a name="securityToken" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials.property.securityToken"></a>

```typescript
public readonly securityToken: string;
```

- *Type:* string

Security token of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#security_token GoogleDatastreamConnectionProfile#security_token}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Username to use for authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#username GoogleDatastreamConnectionProfile#username}

---

### GoogleDatastreamConnectionProfileSpannerProfile <a name="GoogleDatastreamConnectionProfileSpannerProfile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfile.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktn/provider-google-beta'

const googleDatastreamConnectionProfileSpannerProfile: googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfile.property.database">database</a></code> | <code>string</code> | The full project and resource path for Spanner database. Format: projects/{project}/instances/{instance}/databases/{database}. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfile.property.host">host</a></code> | <code>string</code> | The regional Spanner endpoint. Format: https://spanner.{region}.rep.googleapis.com. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfile.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

The full project and resource path for Spanner database. Format: projects/{project}/instances/{instance}/databases/{database}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#database GoogleDatastreamConnectionProfile#database}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfile.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

The regional Spanner endpoint. Format: https://spanner.{region}.rep.googleapis.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#host GoogleDatastreamConnectionProfile#host}

---

### GoogleDatastreamConnectionProfileSqlServerProfile <a name="GoogleDatastreamConnectionProfileSqlServerProfile" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktn/provider-google-beta'

const googleDatastreamConnectionProfileSqlServerProfile: googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile.property.database">database</a></code> | <code>string</code> | Database for the SQL Server connection. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile.property.hostname">hostname</a></code> | <code>string</code> | Hostname for the SQL Server connection. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile.property.username">username</a></code> | <code>string</code> | Username for the SQL Server connection. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile.property.password">password</a></code> | <code>string</code> | Password for the SQL Server connection. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile.property.port">port</a></code> | <code>number</code> | Port for the SQL Server connection. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile.property.secretManagerStoredPassword">secretManagerStoredPassword</a></code> | <code>string</code> | A reference to a Secret Manager resource name storing the user's password. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

Database for the SQL Server connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#database GoogleDatastreamConnectionProfile#database}

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

Hostname for the SQL Server connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#hostname GoogleDatastreamConnectionProfile#hostname}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Username for the SQL Server connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#username GoogleDatastreamConnectionProfile#username}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Password for the SQL Server connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#password GoogleDatastreamConnectionProfile#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Port for the SQL Server connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#port GoogleDatastreamConnectionProfile#port}

---

##### `secretManagerStoredPassword`<sup>Optional</sup> <a name="secretManagerStoredPassword" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile.property.secretManagerStoredPassword"></a>

```typescript
public readonly secretManagerStoredPassword: string;
```

- *Type:* string

A reference to a Secret Manager resource name storing the user's password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#secret_manager_stored_password GoogleDatastreamConnectionProfile#secret_manager_stored_password}

---

### GoogleDatastreamConnectionProfileTimeouts <a name="GoogleDatastreamConnectionProfileTimeouts" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktn/provider-google-beta'

const googleDatastreamConnectionProfileTimeouts: googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#create GoogleDatastreamConnectionProfile#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#delete GoogleDatastreamConnectionProfile#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#update GoogleDatastreamConnectionProfile#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#create GoogleDatastreamConnectionProfile#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#delete GoogleDatastreamConnectionProfile#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_datastream_connection_profile#update GoogleDatastreamConnectionProfile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDatastreamConnectionProfileBigqueryProfileOutputReference <a name="GoogleDatastreamConnectionProfileBigqueryProfileOutputReference" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktn/provider-google-beta'

new googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfile">GoogleDatastreamConnectionProfileBigqueryProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDatastreamConnectionProfileBigqueryProfile;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileBigqueryProfile">GoogleDatastreamConnectionProfileBigqueryProfile</a>

---


### GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference <a name="GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktn/provider-google-beta'

new googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPrivateKey">resetPrivateKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetPrivateKey` <a name="resetPrivateKey" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPrivateKey"></a>

```typescript
public resetPrivateKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.privateKeyInput">privateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity">GoogleDatastreamConnectionProfileForwardSshConnectivity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.privateKeyInput"></a>

```typescript
public readonly privateKeyInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDatastreamConnectionProfileForwardSshConnectivity;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileForwardSshConnectivity">GoogleDatastreamConnectionProfileForwardSshConnectivity</a>

---


### GoogleDatastreamConnectionProfileGcsProfileOutputReference <a name="GoogleDatastreamConnectionProfileGcsProfileOutputReference" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktn/provider-google-beta'

new googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.resetRootPath">resetRootPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRootPath` <a name="resetRootPath" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.resetRootPath"></a>

```typescript
public resetRootPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.rootPathInput">rootPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.rootPath">rootPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile">GoogleDatastreamConnectionProfileGcsProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `rootPathInput`<sup>Optional</sup> <a name="rootPathInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.rootPathInput"></a>

```typescript
public readonly rootPathInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `rootPath`<sup>Required</sup> <a name="rootPath" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.rootPath"></a>

```typescript
public readonly rootPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDatastreamConnectionProfileGcsProfile;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileGcsProfile">GoogleDatastreamConnectionProfileGcsProfile</a>

---


### GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList <a name="GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktn/provider-google-beta'

new googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList.get"></a>

```typescript
public get(index: number): GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddresses">GoogleDatastreamConnectionProfileMongodbProfileHostAddresses</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDatastreamConnectionProfileMongodbProfileHostAddresses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddresses">GoogleDatastreamConnectionProfileMongodbProfileHostAddresses</a>[]

---


### GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference <a name="GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktn/provider-google-beta'

new googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddresses">GoogleDatastreamConnectionProfileMongodbProfileHostAddresses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDatastreamConnectionProfileMongodbProfileHostAddresses;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddresses">GoogleDatastreamConnectionProfileMongodbProfileHostAddresses</a>

---


### GoogleDatastreamConnectionProfileMongodbProfileOutputReference <a name="GoogleDatastreamConnectionProfileMongodbProfileOutputReference" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktn/provider-google-beta'

new googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.putHostAddresses">putHostAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.putSrvConnectionFormat">putSrvConnectionFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.putSslConfig">putSslConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.putStandardConnectionFormat">putStandardConnectionFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.resetReplicaSet">resetReplicaSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.resetSecretManagerStoredPassword">resetSecretManagerStoredPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.resetSrvConnectionFormat">resetSrvConnectionFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.resetSslConfig">resetSslConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.resetStandardConnectionFormat">resetStandardConnectionFormat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHostAddresses` <a name="putHostAddresses" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.putHostAddresses"></a>

```typescript
public putHostAddresses(value: IResolvable | GoogleDatastreamConnectionProfileMongodbProfileHostAddresses[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.putHostAddresses.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddresses">GoogleDatastreamConnectionProfileMongodbProfileHostAddresses</a>[]

---

##### `putSrvConnectionFormat` <a name="putSrvConnectionFormat" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.putSrvConnectionFormat"></a>

```typescript
public putSrvConnectionFormat(value: GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormat): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.putSrvConnectionFormat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormat">GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormat</a>

---

##### `putSslConfig` <a name="putSslConfig" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.putSslConfig"></a>

```typescript
public putSslConfig(value: GoogleDatastreamConnectionProfileMongodbProfileSslConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.putSslConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfig">GoogleDatastreamConnectionProfileMongodbProfileSslConfig</a>

---

##### `putStandardConnectionFormat` <a name="putStandardConnectionFormat" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.putStandardConnectionFormat"></a>

```typescript
public putStandardConnectionFormat(value: GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.putStandardConnectionFormat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat">GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat</a>

---

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetReplicaSet` <a name="resetReplicaSet" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.resetReplicaSet"></a>

```typescript
public resetReplicaSet(): void
```

##### `resetSecretManagerStoredPassword` <a name="resetSecretManagerStoredPassword" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.resetSecretManagerStoredPassword"></a>

```typescript
public resetSecretManagerStoredPassword(): void
```

##### `resetSrvConnectionFormat` <a name="resetSrvConnectionFormat" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.resetSrvConnectionFormat"></a>

```typescript
public resetSrvConnectionFormat(): void
```

##### `resetSslConfig` <a name="resetSslConfig" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.resetSslConfig"></a>

```typescript
public resetSslConfig(): void
```

##### `resetStandardConnectionFormat` <a name="resetStandardConnectionFormat" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.resetStandardConnectionFormat"></a>

```typescript
public resetStandardConnectionFormat(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.hostAddresses">hostAddresses</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList">GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.srvConnectionFormat">srvConnectionFormat</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference">GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.sslConfig">sslConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference">GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.standardConnectionFormat">standardConnectionFormat</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference">GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.hostAddressesInput">hostAddressesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddresses">GoogleDatastreamConnectionProfileMongodbProfileHostAddresses</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.replicaSetInput">replicaSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.secretManagerStoredPasswordInput">secretManagerStoredPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.srvConnectionFormatInput">srvConnectionFormatInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormat">GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.sslConfigInput">sslConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfig">GoogleDatastreamConnectionProfileMongodbProfileSslConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.standardConnectionFormatInput">standardConnectionFormatInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat">GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.replicaSet">replicaSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.secretManagerStoredPassword">secretManagerStoredPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfile">GoogleDatastreamConnectionProfileMongodbProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostAddresses`<sup>Required</sup> <a name="hostAddresses" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.hostAddresses"></a>

```typescript
public readonly hostAddresses: GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList">GoogleDatastreamConnectionProfileMongodbProfileHostAddressesList</a>

---

##### `srvConnectionFormat`<sup>Required</sup> <a name="srvConnectionFormat" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.srvConnectionFormat"></a>

```typescript
public readonly srvConnectionFormat: GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference">GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference</a>

---

##### `sslConfig`<sup>Required</sup> <a name="sslConfig" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.sslConfig"></a>

```typescript
public readonly sslConfig: GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference">GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference</a>

---

##### `standardConnectionFormat`<sup>Required</sup> <a name="standardConnectionFormat" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.standardConnectionFormat"></a>

```typescript
public readonly standardConnectionFormat: GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference">GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference</a>

---

##### `hostAddressesInput`<sup>Optional</sup> <a name="hostAddressesInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.hostAddressesInput"></a>

```typescript
public readonly hostAddressesInput: IResolvable | GoogleDatastreamConnectionProfileMongodbProfileHostAddresses[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileHostAddresses">GoogleDatastreamConnectionProfileMongodbProfileHostAddresses</a>[]

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `replicaSetInput`<sup>Optional</sup> <a name="replicaSetInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.replicaSetInput"></a>

```typescript
public readonly replicaSetInput: string;
```

- *Type:* string

---

##### `secretManagerStoredPasswordInput`<sup>Optional</sup> <a name="secretManagerStoredPasswordInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.secretManagerStoredPasswordInput"></a>

```typescript
public readonly secretManagerStoredPasswordInput: string;
```

- *Type:* string

---

##### `srvConnectionFormatInput`<sup>Optional</sup> <a name="srvConnectionFormatInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.srvConnectionFormatInput"></a>

```typescript
public readonly srvConnectionFormatInput: GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormat;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormat">GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormat</a>

---

##### `sslConfigInput`<sup>Optional</sup> <a name="sslConfigInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.sslConfigInput"></a>

```typescript
public readonly sslConfigInput: GoogleDatastreamConnectionProfileMongodbProfileSslConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfig">GoogleDatastreamConnectionProfileMongodbProfileSslConfig</a>

---

##### `standardConnectionFormatInput`<sup>Optional</sup> <a name="standardConnectionFormatInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.standardConnectionFormatInput"></a>

```typescript
public readonly standardConnectionFormatInput: GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat">GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat</a>

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `replicaSet`<sup>Required</sup> <a name="replicaSet" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.replicaSet"></a>

```typescript
public readonly replicaSet: string;
```

- *Type:* string

---

##### `secretManagerStoredPassword`<sup>Required</sup> <a name="secretManagerStoredPassword" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.secretManagerStoredPassword"></a>

```typescript
public readonly secretManagerStoredPassword: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDatastreamConnectionProfileMongodbProfile;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfile">GoogleDatastreamConnectionProfileMongodbProfile</a>

---


### GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference <a name="GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktn/provider-google-beta'

new googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormat">GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormat;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormat">GoogleDatastreamConnectionProfileMongodbProfileSrvConnectionFormat</a>

---


### GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference <a name="GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktn/provider-google-beta'

new googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.resetCaCertificate">resetCaCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.resetClientCertificate">resetClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.resetClientKey">resetClientKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.resetSecretManagerStoredClientKey">resetSecretManagerStoredClientKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCaCertificate` <a name="resetCaCertificate" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.resetCaCertificate"></a>

```typescript
public resetCaCertificate(): void
```

##### `resetClientCertificate` <a name="resetClientCertificate" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.resetClientCertificate"></a>

```typescript
public resetClientCertificate(): void
```

##### `resetClientKey` <a name="resetClientKey" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.resetClientKey"></a>

```typescript
public resetClientKey(): void
```

##### `resetSecretManagerStoredClientKey` <a name="resetSecretManagerStoredClientKey" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.resetSecretManagerStoredClientKey"></a>

```typescript
public resetSecretManagerStoredClientKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.caCertificateSet">caCertificateSet</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientCertificateSet">clientCertificateSet</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientKeySet">clientKeySet</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.caCertificateInput">caCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientCertificateInput">clientCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientKeyInput">clientKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.secretManagerStoredClientKeyInput">secretManagerStoredClientKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.caCertificate">caCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientCertificate">clientCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientKey">clientKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.secretManagerStoredClientKey">secretManagerStoredClientKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfig">GoogleDatastreamConnectionProfileMongodbProfileSslConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `caCertificateSet`<sup>Required</sup> <a name="caCertificateSet" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.caCertificateSet"></a>

```typescript
public readonly caCertificateSet: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `clientCertificateSet`<sup>Required</sup> <a name="clientCertificateSet" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientCertificateSet"></a>

```typescript
public readonly clientCertificateSet: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `clientKeySet`<sup>Required</sup> <a name="clientKeySet" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientKeySet"></a>

```typescript
public readonly clientKeySet: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `caCertificateInput`<sup>Optional</sup> <a name="caCertificateInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.caCertificateInput"></a>

```typescript
public readonly caCertificateInput: string;
```

- *Type:* string

---

##### `clientCertificateInput`<sup>Optional</sup> <a name="clientCertificateInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientCertificateInput"></a>

```typescript
public readonly clientCertificateInput: string;
```

- *Type:* string

---

##### `clientKeyInput`<sup>Optional</sup> <a name="clientKeyInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientKeyInput"></a>

```typescript
public readonly clientKeyInput: string;
```

- *Type:* string

---

##### `secretManagerStoredClientKeyInput`<sup>Optional</sup> <a name="secretManagerStoredClientKeyInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.secretManagerStoredClientKeyInput"></a>

```typescript
public readonly secretManagerStoredClientKeyInput: string;
```

- *Type:* string

---

##### `caCertificate`<sup>Required</sup> <a name="caCertificate" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.caCertificate"></a>

```typescript
public readonly caCertificate: string;
```

- *Type:* string

---

##### `clientCertificate`<sup>Required</sup> <a name="clientCertificate" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientCertificate"></a>

```typescript
public readonly clientCertificate: string;
```

- *Type:* string

---

##### `clientKey`<sup>Required</sup> <a name="clientKey" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientKey"></a>

```typescript
public readonly clientKey: string;
```

- *Type:* string

---

##### `secretManagerStoredClientKey`<sup>Required</sup> <a name="secretManagerStoredClientKey" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.secretManagerStoredClientKey"></a>

```typescript
public readonly secretManagerStoredClientKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDatastreamConnectionProfileMongodbProfileSslConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileSslConfig">GoogleDatastreamConnectionProfileMongodbProfileSslConfig</a>

---


### GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference <a name="GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktn/provider-google-beta'

new googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.resetDirectConnection">resetDirectConnection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDirectConnection` <a name="resetDirectConnection" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.resetDirectConnection"></a>

```typescript
public resetDirectConnection(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.property.directConnectionInput">directConnectionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.property.directConnection">directConnection</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat">GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `directConnectionInput`<sup>Optional</sup> <a name="directConnectionInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.property.directConnectionInput"></a>

```typescript
public readonly directConnectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `directConnection`<sup>Required</sup> <a name="directConnection" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.property.directConnection"></a>

```typescript
public readonly directConnection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat">GoogleDatastreamConnectionProfileMongodbProfileStandardConnectionFormat</a>

---


### GoogleDatastreamConnectionProfileMysqlProfileOutputReference <a name="GoogleDatastreamConnectionProfileMysqlProfileOutputReference" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktn/provider-google-beta'

new googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.putSslConfig">putSslConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.resetSecretManagerStoredPassword">resetSecretManagerStoredPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.resetSslConfig">resetSslConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSslConfig` <a name="putSslConfig" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.putSslConfig"></a>

```typescript
public putSslConfig(value: GoogleDatastreamConnectionProfileMysqlProfileSslConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.putSslConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig">GoogleDatastreamConnectionProfileMysqlProfileSslConfig</a>

---

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetSecretManagerStoredPassword` <a name="resetSecretManagerStoredPassword" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.resetSecretManagerStoredPassword"></a>

```typescript
public resetSecretManagerStoredPassword(): void
```

##### `resetSslConfig` <a name="resetSslConfig" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.resetSslConfig"></a>

```typescript
public resetSslConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.sslConfig">sslConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference">GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.secretManagerStoredPasswordInput">secretManagerStoredPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.sslConfigInput">sslConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig">GoogleDatastreamConnectionProfileMysqlProfileSslConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.secretManagerStoredPassword">secretManagerStoredPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile">GoogleDatastreamConnectionProfileMysqlProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sslConfig`<sup>Required</sup> <a name="sslConfig" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.sslConfig"></a>

```typescript
public readonly sslConfig: GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference">GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference</a>

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `secretManagerStoredPasswordInput`<sup>Optional</sup> <a name="secretManagerStoredPasswordInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.secretManagerStoredPasswordInput"></a>

```typescript
public readonly secretManagerStoredPasswordInput: string;
```

- *Type:* string

---

##### `sslConfigInput`<sup>Optional</sup> <a name="sslConfigInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.sslConfigInput"></a>

```typescript
public readonly sslConfigInput: GoogleDatastreamConnectionProfileMysqlProfileSslConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig">GoogleDatastreamConnectionProfileMysqlProfileSslConfig</a>

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `secretManagerStoredPassword`<sup>Required</sup> <a name="secretManagerStoredPassword" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.secretManagerStoredPassword"></a>

```typescript
public readonly secretManagerStoredPassword: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDatastreamConnectionProfileMysqlProfile;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfile">GoogleDatastreamConnectionProfileMysqlProfile</a>

---


### GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference <a name="GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktn/provider-google-beta'

new googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetCaCertificate">resetCaCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetClientCertificate">resetClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetClientKey">resetClientKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCaCertificate` <a name="resetCaCertificate" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetCaCertificate"></a>

```typescript
public resetCaCertificate(): void
```

##### `resetClientCertificate` <a name="resetClientCertificate" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetClientCertificate"></a>

```typescript
public resetClientCertificate(): void
```

##### `resetClientKey` <a name="resetClientKey" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetClientKey"></a>

```typescript
public resetClientKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificateSet">caCertificateSet</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificateSet">clientCertificateSet</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKeySet">clientKeySet</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificateInput">caCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificateInput">clientCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKeyInput">clientKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificate">caCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificate">clientCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKey">clientKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig">GoogleDatastreamConnectionProfileMysqlProfileSslConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `caCertificateSet`<sup>Required</sup> <a name="caCertificateSet" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificateSet"></a>

```typescript
public readonly caCertificateSet: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `clientCertificateSet`<sup>Required</sup> <a name="clientCertificateSet" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificateSet"></a>

```typescript
public readonly clientCertificateSet: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `clientKeySet`<sup>Required</sup> <a name="clientKeySet" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKeySet"></a>

```typescript
public readonly clientKeySet: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `caCertificateInput`<sup>Optional</sup> <a name="caCertificateInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificateInput"></a>

```typescript
public readonly caCertificateInput: string;
```

- *Type:* string

---

##### `clientCertificateInput`<sup>Optional</sup> <a name="clientCertificateInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificateInput"></a>

```typescript
public readonly clientCertificateInput: string;
```

- *Type:* string

---

##### `clientKeyInput`<sup>Optional</sup> <a name="clientKeyInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKeyInput"></a>

```typescript
public readonly clientKeyInput: string;
```

- *Type:* string

---

##### `caCertificate`<sup>Required</sup> <a name="caCertificate" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificate"></a>

```typescript
public readonly caCertificate: string;
```

- *Type:* string

---

##### `clientCertificate`<sup>Required</sup> <a name="clientCertificate" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificate"></a>

```typescript
public readonly clientCertificate: string;
```

- *Type:* string

---

##### `clientKey`<sup>Required</sup> <a name="clientKey" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKey"></a>

```typescript
public readonly clientKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDatastreamConnectionProfileMysqlProfileSslConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileMysqlProfileSslConfig">GoogleDatastreamConnectionProfileMysqlProfileSslConfig</a>

---


### GoogleDatastreamConnectionProfileOracleProfileOutputReference <a name="GoogleDatastreamConnectionProfileOracleProfileOutputReference" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktn/provider-google-beta'

new googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.resetConnectionAttributes">resetConnectionAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.resetSecretManagerStoredPassword">resetSecretManagerStoredPassword</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionAttributes` <a name="resetConnectionAttributes" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.resetConnectionAttributes"></a>

```typescript
public resetConnectionAttributes(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetSecretManagerStoredPassword` <a name="resetSecretManagerStoredPassword" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.resetSecretManagerStoredPassword"></a>

```typescript
public resetSecretManagerStoredPassword(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.connectionAttributesInput">connectionAttributesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.databaseServiceInput">databaseServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.secretManagerStoredPasswordInput">secretManagerStoredPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.connectionAttributes">connectionAttributes</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.databaseService">databaseService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.secretManagerStoredPassword">secretManagerStoredPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile">GoogleDatastreamConnectionProfileOracleProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionAttributesInput`<sup>Optional</sup> <a name="connectionAttributesInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.connectionAttributesInput"></a>

```typescript
public readonly connectionAttributesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `databaseServiceInput`<sup>Optional</sup> <a name="databaseServiceInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.databaseServiceInput"></a>

```typescript
public readonly databaseServiceInput: string;
```

- *Type:* string

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `secretManagerStoredPasswordInput`<sup>Optional</sup> <a name="secretManagerStoredPasswordInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.secretManagerStoredPasswordInput"></a>

```typescript
public readonly secretManagerStoredPasswordInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `connectionAttributes`<sup>Required</sup> <a name="connectionAttributes" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.connectionAttributes"></a>

```typescript
public readonly connectionAttributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `databaseService`<sup>Required</sup> <a name="databaseService" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.databaseService"></a>

```typescript
public readonly databaseService: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `secretManagerStoredPassword`<sup>Required</sup> <a name="secretManagerStoredPassword" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.secretManagerStoredPassword"></a>

```typescript
public readonly secretManagerStoredPassword: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDatastreamConnectionProfileOracleProfile;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileOracleProfile">GoogleDatastreamConnectionProfileOracleProfile</a>

---


### GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference <a name="GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktn/provider-google-beta'

new googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.putSslConfig">putSslConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.resetSecretManagerStoredPassword">resetSecretManagerStoredPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.resetSslConfig">resetSslConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSslConfig` <a name="putSslConfig" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.putSslConfig"></a>

```typescript
public putSslConfig(value: GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.putSslConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig">GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig</a>

---

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetSecretManagerStoredPassword` <a name="resetSecretManagerStoredPassword" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.resetSecretManagerStoredPassword"></a>

```typescript
public resetSecretManagerStoredPassword(): void
```

##### `resetSslConfig` <a name="resetSslConfig" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.resetSslConfig"></a>

```typescript
public resetSslConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.sslConfig">sslConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference">GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.secretManagerStoredPasswordInput">secretManagerStoredPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.sslConfigInput">sslConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig">GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.secretManagerStoredPassword">secretManagerStoredPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile">GoogleDatastreamConnectionProfilePostgresqlProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sslConfig`<sup>Required</sup> <a name="sslConfig" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.sslConfig"></a>

```typescript
public readonly sslConfig: GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference">GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference</a>

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `secretManagerStoredPasswordInput`<sup>Optional</sup> <a name="secretManagerStoredPasswordInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.secretManagerStoredPasswordInput"></a>

```typescript
public readonly secretManagerStoredPasswordInput: string;
```

- *Type:* string

---

##### `sslConfigInput`<sup>Optional</sup> <a name="sslConfigInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.sslConfigInput"></a>

```typescript
public readonly sslConfigInput: GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig">GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig</a>

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `secretManagerStoredPassword`<sup>Required</sup> <a name="secretManagerStoredPassword" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.secretManagerStoredPassword"></a>

```typescript
public readonly secretManagerStoredPassword: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDatastreamConnectionProfilePostgresqlProfile;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfile">GoogleDatastreamConnectionProfilePostgresqlProfile</a>

---


### GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference <a name="GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktn/provider-google-beta'

new googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.putServerAndClientVerification">putServerAndClientVerification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.putServerVerification">putServerVerification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.resetServerAndClientVerification">resetServerAndClientVerification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.resetServerVerification">resetServerVerification</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putServerAndClientVerification` <a name="putServerAndClientVerification" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.putServerAndClientVerification"></a>

```typescript
public putServerAndClientVerification(value: GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.putServerAndClientVerification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification">GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification</a>

---

##### `putServerVerification` <a name="putServerVerification" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.putServerVerification"></a>

```typescript
public putServerVerification(value: GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.putServerVerification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification">GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification</a>

---

##### `resetServerAndClientVerification` <a name="resetServerAndClientVerification" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.resetServerAndClientVerification"></a>

```typescript
public resetServerAndClientVerification(): void
```

##### `resetServerVerification` <a name="resetServerVerification" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.resetServerVerification"></a>

```typescript
public resetServerVerification(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.serverAndClientVerification">serverAndClientVerification</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference">GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.serverVerification">serverVerification</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference">GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.serverAndClientVerificationInput">serverAndClientVerificationInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification">GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.serverVerificationInput">serverVerificationInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification">GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig">GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serverAndClientVerification`<sup>Required</sup> <a name="serverAndClientVerification" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.serverAndClientVerification"></a>

```typescript
public readonly serverAndClientVerification: GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference">GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference</a>

---

##### `serverVerification`<sup>Required</sup> <a name="serverVerification" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.serverVerification"></a>

```typescript
public readonly serverVerification: GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference">GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference</a>

---

##### `serverAndClientVerificationInput`<sup>Optional</sup> <a name="serverAndClientVerificationInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.serverAndClientVerificationInput"></a>

```typescript
public readonly serverAndClientVerificationInput: GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification">GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification</a>

---

##### `serverVerificationInput`<sup>Optional</sup> <a name="serverVerificationInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.serverVerificationInput"></a>

```typescript
public readonly serverVerificationInput: GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification">GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig">GoogleDatastreamConnectionProfilePostgresqlProfileSslConfig</a>

---


### GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference <a name="GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktn/provider-google-beta'

new googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.caCertificateInput">caCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.clientCertificateInput">clientCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.clientKeyInput">clientKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.caCertificate">caCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.clientCertificate">clientCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.clientKey">clientKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification">GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `caCertificateInput`<sup>Optional</sup> <a name="caCertificateInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.caCertificateInput"></a>

```typescript
public readonly caCertificateInput: string;
```

- *Type:* string

---

##### `clientCertificateInput`<sup>Optional</sup> <a name="clientCertificateInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.clientCertificateInput"></a>

```typescript
public readonly clientCertificateInput: string;
```

- *Type:* string

---

##### `clientKeyInput`<sup>Optional</sup> <a name="clientKeyInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.clientKeyInput"></a>

```typescript
public readonly clientKeyInput: string;
```

- *Type:* string

---

##### `caCertificate`<sup>Required</sup> <a name="caCertificate" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.caCertificate"></a>

```typescript
public readonly caCertificate: string;
```

- *Type:* string

---

##### `clientCertificate`<sup>Required</sup> <a name="clientCertificate" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.clientCertificate"></a>

```typescript
public readonly clientCertificate: string;
```

- *Type:* string

---

##### `clientKey`<sup>Required</sup> <a name="clientKey" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.clientKey"></a>

```typescript
public readonly clientKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification">GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification</a>

---


### GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference <a name="GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktn/provider-google-beta'

new googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.property.caCertificateInput">caCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.property.caCertificate">caCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification">GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `caCertificateInput`<sup>Optional</sup> <a name="caCertificateInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.property.caCertificateInput"></a>

```typescript
public readonly caCertificateInput: string;
```

- *Type:* string

---

##### `caCertificate`<sup>Required</sup> <a name="caCertificate" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.property.caCertificate"></a>

```typescript
public readonly caCertificate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification">GoogleDatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification</a>

---


### GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference <a name="GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktn/provider-google-beta'

new googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.property.privateConnectionInput">privateConnectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.property.privateConnection">privateConnection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity">GoogleDatastreamConnectionProfilePrivateConnectivity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `privateConnectionInput`<sup>Optional</sup> <a name="privateConnectionInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.property.privateConnectionInput"></a>

```typescript
public readonly privateConnectionInput: string;
```

- *Type:* string

---

##### `privateConnection`<sup>Required</sup> <a name="privateConnection" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.property.privateConnection"></a>

```typescript
public readonly privateConnection: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDatastreamConnectionProfilePrivateConnectivity;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfilePrivateConnectivity">GoogleDatastreamConnectionProfilePrivateConnectivity</a>

---


### GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference <a name="GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktn/provider-google-beta'

new googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.resetSecretManagerStoredClientSecret">resetSecretManagerStoredClientSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientId` <a name="resetClientId" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetSecretManagerStoredClientSecret` <a name="resetSecretManagerStoredClientSecret" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.resetSecretManagerStoredClientSecret"></a>

```typescript
public resetSecretManagerStoredClientSecret(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.property.secretManagerStoredClientSecretInput">secretManagerStoredClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.property.secretManagerStoredClientSecret">secretManagerStoredClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials">GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `secretManagerStoredClientSecretInput`<sup>Optional</sup> <a name="secretManagerStoredClientSecretInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.property.secretManagerStoredClientSecretInput"></a>

```typescript
public readonly secretManagerStoredClientSecretInput: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `secretManagerStoredClientSecret`<sup>Required</sup> <a name="secretManagerStoredClientSecret" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.property.secretManagerStoredClientSecret"></a>

```typescript
public readonly secretManagerStoredClientSecret: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials">GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials</a>

---


### GoogleDatastreamConnectionProfileSalesforceProfileOutputReference <a name="GoogleDatastreamConnectionProfileSalesforceProfileOutputReference" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktn/provider-google-beta'

new googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.putOauth2ClientCredentials">putOauth2ClientCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.putUserCredentials">putUserCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.resetOauth2ClientCredentials">resetOauth2ClientCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.resetUserCredentials">resetUserCredentials</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOauth2ClientCredentials` <a name="putOauth2ClientCredentials" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.putOauth2ClientCredentials"></a>

```typescript
public putOauth2ClientCredentials(value: GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.putOauth2ClientCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials">GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials</a>

---

##### `putUserCredentials` <a name="putUserCredentials" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.putUserCredentials"></a>

```typescript
public putUserCredentials(value: GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.putUserCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials">GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials</a>

---

##### `resetOauth2ClientCredentials` <a name="resetOauth2ClientCredentials" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.resetOauth2ClientCredentials"></a>

```typescript
public resetOauth2ClientCredentials(): void
```

##### `resetUserCredentials` <a name="resetUserCredentials" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.resetUserCredentials"></a>

```typescript
public resetUserCredentials(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.property.oauth2ClientCredentials">oauth2ClientCredentials</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference">GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.property.userCredentials">userCredentials</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference">GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.property.oauth2ClientCredentialsInput">oauth2ClientCredentialsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials">GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.property.userCredentialsInput">userCredentialsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials">GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfile">GoogleDatastreamConnectionProfileSalesforceProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `oauth2ClientCredentials`<sup>Required</sup> <a name="oauth2ClientCredentials" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.property.oauth2ClientCredentials"></a>

```typescript
public readonly oauth2ClientCredentials: GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference">GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentialsOutputReference</a>

---

##### `userCredentials`<sup>Required</sup> <a name="userCredentials" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.property.userCredentials"></a>

```typescript
public readonly userCredentials: GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference">GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference</a>

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `oauth2ClientCredentialsInput`<sup>Optional</sup> <a name="oauth2ClientCredentialsInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.property.oauth2ClientCredentialsInput"></a>

```typescript
public readonly oauth2ClientCredentialsInput: GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials">GoogleDatastreamConnectionProfileSalesforceProfileOauth2ClientCredentials</a>

---

##### `userCredentialsInput`<sup>Optional</sup> <a name="userCredentialsInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.property.userCredentialsInput"></a>

```typescript
public readonly userCredentialsInput: GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials">GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials</a>

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDatastreamConnectionProfileSalesforceProfile;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfile">GoogleDatastreamConnectionProfileSalesforceProfile</a>

---


### GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference <a name="GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktn/provider-google-beta'

new googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.resetSecretManagerStoredPassword">resetSecretManagerStoredPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.resetSecretManagerStoredSecurityToken">resetSecretManagerStoredSecurityToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.resetSecurityToken">resetSecurityToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetSecretManagerStoredPassword` <a name="resetSecretManagerStoredPassword" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.resetSecretManagerStoredPassword"></a>

```typescript
public resetSecretManagerStoredPassword(): void
```

##### `resetSecretManagerStoredSecurityToken` <a name="resetSecretManagerStoredSecurityToken" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.resetSecretManagerStoredSecurityToken"></a>

```typescript
public resetSecretManagerStoredSecurityToken(): void
```

##### `resetSecurityToken` <a name="resetSecurityToken" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.resetSecurityToken"></a>

```typescript
public resetSecurityToken(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.property.secretManagerStoredPasswordInput">secretManagerStoredPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.property.secretManagerStoredSecurityTokenInput">secretManagerStoredSecurityTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.property.securityTokenInput">securityTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.property.secretManagerStoredPassword">secretManagerStoredPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.property.secretManagerStoredSecurityToken">secretManagerStoredSecurityToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.property.securityToken">securityToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials">GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `secretManagerStoredPasswordInput`<sup>Optional</sup> <a name="secretManagerStoredPasswordInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.property.secretManagerStoredPasswordInput"></a>

```typescript
public readonly secretManagerStoredPasswordInput: string;
```

- *Type:* string

---

##### `secretManagerStoredSecurityTokenInput`<sup>Optional</sup> <a name="secretManagerStoredSecurityTokenInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.property.secretManagerStoredSecurityTokenInput"></a>

```typescript
public readonly secretManagerStoredSecurityTokenInput: string;
```

- *Type:* string

---

##### `securityTokenInput`<sup>Optional</sup> <a name="securityTokenInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.property.securityTokenInput"></a>

```typescript
public readonly securityTokenInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `secretManagerStoredPassword`<sup>Required</sup> <a name="secretManagerStoredPassword" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.property.secretManagerStoredPassword"></a>

```typescript
public readonly secretManagerStoredPassword: string;
```

- *Type:* string

---

##### `secretManagerStoredSecurityToken`<sup>Required</sup> <a name="secretManagerStoredSecurityToken" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.property.secretManagerStoredSecurityToken"></a>

```typescript
public readonly secretManagerStoredSecurityToken: string;
```

- *Type:* string

---

##### `securityToken`<sup>Required</sup> <a name="securityToken" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.property.securityToken"></a>

```typescript
public readonly securityToken: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials">GoogleDatastreamConnectionProfileSalesforceProfileUserCredentials</a>

---


### GoogleDatastreamConnectionProfileSpannerProfileOutputReference <a name="GoogleDatastreamConnectionProfileSpannerProfileOutputReference" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktn/provider-google-beta'

new googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.resetHost">resetHost</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHost` <a name="resetHost" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.resetHost"></a>

```typescript
public resetHost(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfile">GoogleDatastreamConnectionProfileSpannerProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDatastreamConnectionProfileSpannerProfile;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSpannerProfile">GoogleDatastreamConnectionProfileSpannerProfile</a>

---


### GoogleDatastreamConnectionProfileSqlServerProfileOutputReference <a name="GoogleDatastreamConnectionProfileSqlServerProfileOutputReference" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktn/provider-google-beta'

new googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.resetSecretManagerStoredPassword">resetSecretManagerStoredPassword</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetSecretManagerStoredPassword` <a name="resetSecretManagerStoredPassword" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.resetSecretManagerStoredPassword"></a>

```typescript
public resetSecretManagerStoredPassword(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.secretManagerStoredPasswordInput">secretManagerStoredPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.secretManagerStoredPassword">secretManagerStoredPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile">GoogleDatastreamConnectionProfileSqlServerProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `secretManagerStoredPasswordInput`<sup>Optional</sup> <a name="secretManagerStoredPasswordInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.secretManagerStoredPasswordInput"></a>

```typescript
public readonly secretManagerStoredPasswordInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `secretManagerStoredPassword`<sup>Required</sup> <a name="secretManagerStoredPassword" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.secretManagerStoredPassword"></a>

```typescript
public readonly secretManagerStoredPassword: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDatastreamConnectionProfileSqlServerProfile;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileSqlServerProfile">GoogleDatastreamConnectionProfileSqlServerProfile</a>

---


### GoogleDatastreamConnectionProfileTimeoutsOutputReference <a name="GoogleDatastreamConnectionProfileTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleDatastreamConnectionProfile } from '@cdktn/provider-google-beta'

new googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts">GoogleDatastreamConnectionProfileTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDatastreamConnectionProfileTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDatastreamConnectionProfile.GoogleDatastreamConnectionProfileTimeouts">GoogleDatastreamConnectionProfileTimeouts</a>

---



