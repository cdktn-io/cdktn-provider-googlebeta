# `googleBigqueryDataTransferDataSourceEnrollment` Submodule <a name="`googleBigqueryDataTransferDataSourceEnrollment` Submodule" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigqueryDataTransferDataSourceEnrollment <a name="GoogleBigqueryDataTransferDataSourceEnrollment" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment google_bigquery_data_transfer_data_source_enrollment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.Initializer"></a>

```typescript
import { googleBigqueryDataTransferDataSourceEnrollment } from '@cdktn/provider-google-beta'

new googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment(scope: Construct, id: string, config: GoogleBigqueryDataTransferDataSourceEnrollmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig">GoogleBigqueryDataTransferDataSourceEnrollmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig">GoogleBigqueryDataTransferDataSourceEnrollmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.resetUnenrollLocation">resetUnenrollLocation</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts">GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUnenrollLocation` <a name="resetUnenrollLocation" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.resetUnenrollLocation"></a>

```typescript
public resetUnenrollLocation(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleBigqueryDataTransferDataSourceEnrollment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.isConstruct"></a>

```typescript
import { googleBigqueryDataTransferDataSourceEnrollment } from '@cdktn/provider-google-beta'

googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.isTerraformElement"></a>

```typescript
import { googleBigqueryDataTransferDataSourceEnrollment } from '@cdktn/provider-google-beta'

googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.isTerraformResource"></a>

```typescript
import { googleBigqueryDataTransferDataSourceEnrollment } from '@cdktn/provider-google-beta'

googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.generateConfigForImport"></a>

```typescript
import { googleBigqueryDataTransferDataSourceEnrollment } from '@cdktn/provider-google-beta'

googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleBigqueryDataTransferDataSourceEnrollment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleBigqueryDataTransferDataSourceEnrollment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleBigqueryDataTransferDataSourceEnrollment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleBigqueryDataTransferDataSourceEnrollment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.authorizationType">authorizationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.dataRefreshType">dataRefreshType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.defaultDataRefreshWindowDays">defaultDataRefreshWindowDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.defaultSchedule">defaultSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.helpUrl">helpUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.manualRunsDisabled">manualRunsDisabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.minimumScheduleInterval">minimumScheduleInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList">GoogleBigqueryDataTransferDataSourceEnrollmentParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.supportsCustomSchedule">supportsCustomSchedule</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference">GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.updateDeadlineSeconds">updateDeadlineSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.dataSourceIdInput">dataSourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts">GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.unenrollLocationInput">unenrollLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.dataSourceId">dataSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.unenrollLocation">unenrollLocation</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `authorizationType`<sup>Required</sup> <a name="authorizationType" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.authorizationType"></a>

```typescript
public readonly authorizationType: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `dataRefreshType`<sup>Required</sup> <a name="dataRefreshType" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.dataRefreshType"></a>

```typescript
public readonly dataRefreshType: string;
```

- *Type:* string

---

##### `defaultDataRefreshWindowDays`<sup>Required</sup> <a name="defaultDataRefreshWindowDays" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.defaultDataRefreshWindowDays"></a>

```typescript
public readonly defaultDataRefreshWindowDays: number;
```

- *Type:* number

---

##### `defaultSchedule`<sup>Required</sup> <a name="defaultSchedule" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.defaultSchedule"></a>

```typescript
public readonly defaultSchedule: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `helpUrl`<sup>Required</sup> <a name="helpUrl" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.helpUrl"></a>

```typescript
public readonly helpUrl: string;
```

- *Type:* string

---

##### `manualRunsDisabled`<sup>Required</sup> <a name="manualRunsDisabled" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.manualRunsDisabled"></a>

```typescript
public readonly manualRunsDisabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `minimumScheduleInterval`<sup>Required</sup> <a name="minimumScheduleInterval" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.minimumScheduleInterval"></a>

```typescript
public readonly minimumScheduleInterval: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.parameters"></a>

```typescript
public readonly parameters: GoogleBigqueryDataTransferDataSourceEnrollmentParametersList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList">GoogleBigqueryDataTransferDataSourceEnrollmentParametersList</a>

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `supportsCustomSchedule`<sup>Required</sup> <a name="supportsCustomSchedule" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.supportsCustomSchedule"></a>

```typescript
public readonly supportsCustomSchedule: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference">GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference</a>

---

##### `updateDeadlineSeconds`<sup>Required</sup> <a name="updateDeadlineSeconds" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.updateDeadlineSeconds"></a>

```typescript
public readonly updateDeadlineSeconds: number;
```

- *Type:* number

---

##### `dataSourceIdInput`<sup>Optional</sup> <a name="dataSourceIdInput" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.dataSourceIdInput"></a>

```typescript
public readonly dataSourceIdInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts">GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts</a>

---

##### `unenrollLocationInput`<sup>Optional</sup> <a name="unenrollLocationInput" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.unenrollLocationInput"></a>

```typescript
public readonly unenrollLocationInput: string;
```

- *Type:* string

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.dataSourceId"></a>

```typescript
public readonly dataSourceId: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `unenrollLocation`<sup>Required</sup> <a name="unenrollLocation" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.unenrollLocation"></a>

```typescript
public readonly unenrollLocation: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigqueryDataTransferDataSourceEnrollmentConfig <a name="GoogleBigqueryDataTransferDataSourceEnrollmentConfig" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.Initializer"></a>

```typescript
import { googleBigqueryDataTransferDataSourceEnrollment } from '@cdktn/provider-google-beta'

const googleBigqueryDataTransferDataSourceEnrollmentConfig: googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.dataSourceId">dataSourceId</a></code> | <code>string</code> | The ID of the data source to enroll. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#id GoogleBigqueryDataTransferDataSourceEnrollment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#project GoogleBigqueryDataTransferDataSourceEnrollment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts">GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.unenrollLocation">unenrollLocation</a></code> | <code>string</code> | The location whose 'unenrollDataSources' endpoint is called when this resource is destroyed. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.dataSourceId"></a>

```typescript
public readonly dataSourceId: string;
```

- *Type:* string

The ID of the data source to enroll.

For Google Cloud Carbon Footprint exports this is
'61cede5a-0000-2440-ad42-883d24f8f7b8'. Call 'projects.dataSources.list' to see the data
sources currently enrolled in a project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#data_source_id GoogleBigqueryDataTransferDataSourceEnrollment#data_source_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#deletion_policy GoogleBigqueryDataTransferDataSourceEnrollment#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#id GoogleBigqueryDataTransferDataSourceEnrollment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#project GoogleBigqueryDataTransferDataSourceEnrollment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts">GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#timeouts GoogleBigqueryDataTransferDataSourceEnrollment#timeouts}

---

##### `unenrollLocation`<sup>Optional</sup> <a name="unenrollLocation" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentConfig.property.unenrollLocation"></a>

```typescript
public readonly unenrollLocation: string;
```

- *Type:* string

The location whose 'unenrollDataSources' endpoint is called when this resource is destroyed.

Enrollment itself is project-wide and unenrolling through any location removes it everywhere;
this only exists because the API offers no project-level unenroll method. Override it only if
'us' is not routable for the project, for example under a data-residency organization policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#unenroll_location GoogleBigqueryDataTransferDataSourceEnrollment#unenroll_location}

---

### GoogleBigqueryDataTransferDataSourceEnrollmentParameters <a name="GoogleBigqueryDataTransferDataSourceEnrollmentParameters" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParameters.Initializer"></a>

```typescript
import { googleBigqueryDataTransferDataSourceEnrollment } from '@cdktn/provider-google-beta'

const googleBigqueryDataTransferDataSourceEnrollmentParameters: googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParameters = { ... }
```


### GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts <a name="GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts.Initializer"></a>

```typescript
import { googleBigqueryDataTransferDataSourceEnrollment } from '@cdktn/provider-google-beta'

const googleBigqueryDataTransferDataSourceEnrollmentTimeouts: googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#create GoogleBigqueryDataTransferDataSourceEnrollment#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#delete GoogleBigqueryDataTransferDataSourceEnrollment#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#create GoogleBigqueryDataTransferDataSourceEnrollment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_bigquery_data_transfer_data_source_enrollment#delete GoogleBigqueryDataTransferDataSourceEnrollment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigqueryDataTransferDataSourceEnrollmentParametersList <a name="GoogleBigqueryDataTransferDataSourceEnrollmentParametersList" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.Initializer"></a>

```typescript
import { googleBigqueryDataTransferDataSourceEnrollment } from '@cdktn/provider-google-beta'

new googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.get"></a>

```typescript
public get(index: number): GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference <a name="GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer"></a>

```typescript
import { googleBigqueryDataTransferDataSourceEnrollment } from '@cdktn/provider-google-beta'

new googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.allowedValues">allowedValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.deprecated">deprecated</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.immutable">immutable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.maxListSize">maxListSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.maxValue">maxValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.minValue">minValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.paramId">paramId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.required">required</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.validationDescription">validationDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.validationHelpUrl">validationHelpUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.validationRegex">validationRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParameters">GoogleBigqueryDataTransferDataSourceEnrollmentParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedValues`<sup>Required</sup> <a name="allowedValues" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.allowedValues"></a>

```typescript
public readonly allowedValues: string[];
```

- *Type:* string[]

---

##### `deprecated`<sup>Required</sup> <a name="deprecated" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.deprecated"></a>

```typescript
public readonly deprecated: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `immutable`<sup>Required</sup> <a name="immutable" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.immutable"></a>

```typescript
public readonly immutable: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `maxListSize`<sup>Required</sup> <a name="maxListSize" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.maxListSize"></a>

```typescript
public readonly maxListSize: number;
```

- *Type:* number

---

##### `maxValue`<sup>Required</sup> <a name="maxValue" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.maxValue"></a>

```typescript
public readonly maxValue: number;
```

- *Type:* number

---

##### `minValue`<sup>Required</sup> <a name="minValue" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.minValue"></a>

```typescript
public readonly minValue: number;
```

- *Type:* number

---

##### `paramId`<sup>Required</sup> <a name="paramId" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.paramId"></a>

```typescript
public readonly paramId: string;
```

- *Type:* string

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.required"></a>

```typescript
public readonly required: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `validationDescription`<sup>Required</sup> <a name="validationDescription" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.validationDescription"></a>

```typescript
public readonly validationDescription: string;
```

- *Type:* string

---

##### `validationHelpUrl`<sup>Required</sup> <a name="validationHelpUrl" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.validationHelpUrl"></a>

```typescript
public readonly validationHelpUrl: string;
```

- *Type:* string

---

##### `validationRegex`<sup>Required</sup> <a name="validationRegex" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.validationRegex"></a>

```typescript
public readonly validationRegex: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBigqueryDataTransferDataSourceEnrollmentParameters;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentParameters">GoogleBigqueryDataTransferDataSourceEnrollmentParameters</a>

---


### GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference <a name="GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleBigqueryDataTransferDataSourceEnrollment } from '@cdktn/provider-google-beta'

new googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts">GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBigqueryDataTransferDataSourceEnrollment.GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts">GoogleBigqueryDataTransferDataSourceEnrollmentTimeouts</a>

---



