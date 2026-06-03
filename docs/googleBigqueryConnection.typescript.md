# `googleBigqueryConnection` Submodule <a name="`googleBigqueryConnection` Submodule" id="@cdktn/provider-google-beta.googleBigqueryConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigqueryConnection <a name="GoogleBigqueryConnection" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection google_bigquery_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktn/provider-google-beta'

new googleBigqueryConnection.GoogleBigqueryConnection(scope: Construct, id: string, config?: GoogleBigqueryConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig">GoogleBigqueryConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig">GoogleBigqueryConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putAws">putAws</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putAzure">putAzure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putCloudResource">putCloudResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putCloudSpanner">putCloudSpanner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putCloudSql">putCloudSql</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putConfiguration">putConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putSpark">putSpark</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetAws">resetAws</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetAzure">resetAzure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetCloudResource">resetCloudResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetCloudSpanner">resetCloudSpanner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetCloudSql">resetCloudSql</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetConnectionId">resetConnectionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetFriendlyName">resetFriendlyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetSpark">resetSpark</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAws` <a name="putAws" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putAws"></a>

```typescript
public putAws(value: GoogleBigqueryConnectionAws): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putAws.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAws">GoogleBigqueryConnectionAws</a>

---

##### `putAzure` <a name="putAzure" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putAzure"></a>

```typescript
public putAzure(value: GoogleBigqueryConnectionAzure): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putAzure.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzure">GoogleBigqueryConnectionAzure</a>

---

##### `putCloudResource` <a name="putCloudResource" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putCloudResource"></a>

```typescript
public putCloudResource(value: GoogleBigqueryConnectionCloudResource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putCloudResource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResource">GoogleBigqueryConnectionCloudResource</a>

---

##### `putCloudSpanner` <a name="putCloudSpanner" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putCloudSpanner"></a>

```typescript
public putCloudSpanner(value: GoogleBigqueryConnectionCloudSpanner): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putCloudSpanner.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner">GoogleBigqueryConnectionCloudSpanner</a>

---

##### `putCloudSql` <a name="putCloudSql" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putCloudSql"></a>

```typescript
public putCloudSql(value: GoogleBigqueryConnectionCloudSql): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putCloudSql.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql">GoogleBigqueryConnectionCloudSql</a>

---

##### `putConfiguration` <a name="putConfiguration" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putConfiguration"></a>

```typescript
public putConfiguration(value: GoogleBigqueryConnectionConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfiguration">GoogleBigqueryConnectionConfiguration</a>

---

##### `putSpark` <a name="putSpark" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putSpark"></a>

```typescript
public putSpark(value: GoogleBigqueryConnectionSpark): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putSpark.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSpark">GoogleBigqueryConnectionSpark</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleBigqueryConnectionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts">GoogleBigqueryConnectionTimeouts</a>

---

##### `resetAws` <a name="resetAws" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetAws"></a>

```typescript
public resetAws(): void
```

##### `resetAzure` <a name="resetAzure" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetAzure"></a>

```typescript
public resetAzure(): void
```

##### `resetCloudResource` <a name="resetCloudResource" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetCloudResource"></a>

```typescript
public resetCloudResource(): void
```

##### `resetCloudSpanner` <a name="resetCloudSpanner" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetCloudSpanner"></a>

```typescript
public resetCloudSpanner(): void
```

##### `resetCloudSql` <a name="resetCloudSql" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetCloudSql"></a>

```typescript
public resetCloudSql(): void
```

##### `resetConfiguration` <a name="resetConfiguration" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetConfiguration"></a>

```typescript
public resetConfiguration(): void
```

##### `resetConnectionId` <a name="resetConnectionId" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetConnectionId"></a>

```typescript
public resetConnectionId(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFriendlyName` <a name="resetFriendlyName" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetFriendlyName"></a>

```typescript
public resetFriendlyName(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetKmsKeyName"></a>

```typescript
public resetKmsKeyName(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSpark` <a name="resetSpark" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetSpark"></a>

```typescript
public resetSpark(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleBigqueryConnection resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.isConstruct"></a>

```typescript
import { googleBigqueryConnection } from '@cdktn/provider-google-beta'

googleBigqueryConnection.GoogleBigqueryConnection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.isTerraformElement"></a>

```typescript
import { googleBigqueryConnection } from '@cdktn/provider-google-beta'

googleBigqueryConnection.GoogleBigqueryConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.isTerraformResource"></a>

```typescript
import { googleBigqueryConnection } from '@cdktn/provider-google-beta'

googleBigqueryConnection.GoogleBigqueryConnection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.generateConfigForImport"></a>

```typescript
import { googleBigqueryConnection } from '@cdktn/provider-google-beta'

googleBigqueryConnection.GoogleBigqueryConnection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleBigqueryConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleBigqueryConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleBigqueryConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleBigqueryConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.aws">aws</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference">GoogleBigqueryConnectionAwsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.azure">azure</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference">GoogleBigqueryConnectionAzureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.cloudResource">cloudResource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference">GoogleBigqueryConnectionCloudResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.cloudSpanner">cloudSpanner</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference">GoogleBigqueryConnectionCloudSpannerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.cloudSql">cloudSql</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference">GoogleBigqueryConnectionCloudSqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference">GoogleBigqueryConnectionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.hasCredential">hasCredential</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.spark">spark</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference">GoogleBigqueryConnectionSparkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference">GoogleBigqueryConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.awsInput">awsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAws">GoogleBigqueryConnectionAws</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.azureInput">azureInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzure">GoogleBigqueryConnectionAzure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.cloudResourceInput">cloudResourceInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResource">GoogleBigqueryConnectionCloudResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.cloudSpannerInput">cloudSpannerInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner">GoogleBigqueryConnectionCloudSpanner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.cloudSqlInput">cloudSqlInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql">GoogleBigqueryConnectionCloudSql</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.configurationInput">configurationInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfiguration">GoogleBigqueryConnectionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.connectionIdInput">connectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.friendlyNameInput">friendlyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.sparkInput">sparkInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSpark">GoogleBigqueryConnectionSpark</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts">GoogleBigqueryConnectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.connectionId">connectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.friendlyName">friendlyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `aws`<sup>Required</sup> <a name="aws" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.aws"></a>

```typescript
public readonly aws: GoogleBigqueryConnectionAwsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference">GoogleBigqueryConnectionAwsOutputReference</a>

---

##### `azure`<sup>Required</sup> <a name="azure" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.azure"></a>

```typescript
public readonly azure: GoogleBigqueryConnectionAzureOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference">GoogleBigqueryConnectionAzureOutputReference</a>

---

##### `cloudResource`<sup>Required</sup> <a name="cloudResource" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.cloudResource"></a>

```typescript
public readonly cloudResource: GoogleBigqueryConnectionCloudResourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference">GoogleBigqueryConnectionCloudResourceOutputReference</a>

---

##### `cloudSpanner`<sup>Required</sup> <a name="cloudSpanner" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.cloudSpanner"></a>

```typescript
public readonly cloudSpanner: GoogleBigqueryConnectionCloudSpannerOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference">GoogleBigqueryConnectionCloudSpannerOutputReference</a>

---

##### `cloudSql`<sup>Required</sup> <a name="cloudSql" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.cloudSql"></a>

```typescript
public readonly cloudSql: GoogleBigqueryConnectionCloudSqlOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference">GoogleBigqueryConnectionCloudSqlOutputReference</a>

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.configuration"></a>

```typescript
public readonly configuration: GoogleBigqueryConnectionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference">GoogleBigqueryConnectionConfigurationOutputReference</a>

---

##### `hasCredential`<sup>Required</sup> <a name="hasCredential" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.hasCredential"></a>

```typescript
public readonly hasCredential: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `spark`<sup>Required</sup> <a name="spark" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.spark"></a>

```typescript
public readonly spark: GoogleBigqueryConnectionSparkOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference">GoogleBigqueryConnectionSparkOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleBigqueryConnectionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference">GoogleBigqueryConnectionTimeoutsOutputReference</a>

---

##### `awsInput`<sup>Optional</sup> <a name="awsInput" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.awsInput"></a>

```typescript
public readonly awsInput: GoogleBigqueryConnectionAws;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAws">GoogleBigqueryConnectionAws</a>

---

##### `azureInput`<sup>Optional</sup> <a name="azureInput" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.azureInput"></a>

```typescript
public readonly azureInput: GoogleBigqueryConnectionAzure;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzure">GoogleBigqueryConnectionAzure</a>

---

##### `cloudResourceInput`<sup>Optional</sup> <a name="cloudResourceInput" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.cloudResourceInput"></a>

```typescript
public readonly cloudResourceInput: GoogleBigqueryConnectionCloudResource;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResource">GoogleBigqueryConnectionCloudResource</a>

---

##### `cloudSpannerInput`<sup>Optional</sup> <a name="cloudSpannerInput" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.cloudSpannerInput"></a>

```typescript
public readonly cloudSpannerInput: GoogleBigqueryConnectionCloudSpanner;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner">GoogleBigqueryConnectionCloudSpanner</a>

---

##### `cloudSqlInput`<sup>Optional</sup> <a name="cloudSqlInput" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.cloudSqlInput"></a>

```typescript
public readonly cloudSqlInput: GoogleBigqueryConnectionCloudSql;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql">GoogleBigqueryConnectionCloudSql</a>

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.configurationInput"></a>

```typescript
public readonly configurationInput: GoogleBigqueryConnectionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfiguration">GoogleBigqueryConnectionConfiguration</a>

---

##### `connectionIdInput`<sup>Optional</sup> <a name="connectionIdInput" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.connectionIdInput"></a>

```typescript
public readonly connectionIdInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `friendlyNameInput`<sup>Optional</sup> <a name="friendlyNameInput" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.friendlyNameInput"></a>

```typescript
public readonly friendlyNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.kmsKeyNameInput"></a>

```typescript
public readonly kmsKeyNameInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `sparkInput`<sup>Optional</sup> <a name="sparkInput" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.sparkInput"></a>

```typescript
public readonly sparkInput: GoogleBigqueryConnectionSpark;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSpark">GoogleBigqueryConnectionSpark</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleBigqueryConnectionTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts">GoogleBigqueryConnectionTimeouts</a>

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `friendlyName`<sup>Required</sup> <a name="friendlyName" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.friendlyName"></a>

```typescript
public readonly friendlyName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigqueryConnectionAws <a name="GoogleBigqueryConnectionAws" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAws"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAws.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktn/provider-google-beta'

const googleBigqueryConnectionAws: googleBigqueryConnection.GoogleBigqueryConnectionAws = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAws.property.accessRole">accessRole</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRole">GoogleBigqueryConnectionAwsAccessRole</a></code> | access_role block. |

---

##### `accessRole`<sup>Required</sup> <a name="accessRole" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAws.property.accessRole"></a>

```typescript
public readonly accessRole: GoogleBigqueryConnectionAwsAccessRole;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRole">GoogleBigqueryConnectionAwsAccessRole</a>

access_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#access_role GoogleBigqueryConnection#access_role}

---

### GoogleBigqueryConnectionAwsAccessRole <a name="GoogleBigqueryConnectionAwsAccessRole" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRole"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRole.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktn/provider-google-beta'

const googleBigqueryConnectionAwsAccessRole: googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRole = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRole.property.iamRoleId">iamRoleId</a></code> | <code>string</code> | The user’s AWS IAM Role that trusts the Google-owned AWS IAM user Connection. |

---

##### `iamRoleId`<sup>Required</sup> <a name="iamRoleId" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRole.property.iamRoleId"></a>

```typescript
public readonly iamRoleId: string;
```

- *Type:* string

The user’s AWS IAM Role that trusts the Google-owned AWS IAM user Connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#iam_role_id GoogleBigqueryConnection#iam_role_id}

---

### GoogleBigqueryConnectionAzure <a name="GoogleBigqueryConnectionAzure" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzure.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktn/provider-google-beta'

const googleBigqueryConnectionAzure: googleBigqueryConnection.GoogleBigqueryConnectionAzure = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzure.property.customerTenantId">customerTenantId</a></code> | <code>string</code> | The id of customer's directory that host the data. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzure.property.federatedApplicationClientId">federatedApplicationClientId</a></code> | <code>string</code> | The Azure Application (client) ID where the federated credentials will be hosted. |

---

##### `customerTenantId`<sup>Required</sup> <a name="customerTenantId" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzure.property.customerTenantId"></a>

```typescript
public readonly customerTenantId: string;
```

- *Type:* string

The id of customer's directory that host the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#customer_tenant_id GoogleBigqueryConnection#customer_tenant_id}

---

##### `federatedApplicationClientId`<sup>Optional</sup> <a name="federatedApplicationClientId" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzure.property.federatedApplicationClientId"></a>

```typescript
public readonly federatedApplicationClientId: string;
```

- *Type:* string

The Azure Application (client) ID where the federated credentials will be hosted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#federated_application_client_id GoogleBigqueryConnection#federated_application_client_id}

---

### GoogleBigqueryConnectionCloudResource <a name="GoogleBigqueryConnectionCloudResource" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResource.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktn/provider-google-beta'

const googleBigqueryConnectionCloudResource: googleBigqueryConnection.GoogleBigqueryConnectionCloudResource = { ... }
```


### GoogleBigqueryConnectionCloudSpanner <a name="GoogleBigqueryConnectionCloudSpanner" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktn/provider-google-beta'

const googleBigqueryConnectionCloudSpanner: googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner.property.database">database</a></code> | <code>string</code> | Cloud Spanner database in the form 'project/instance/database'. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner.property.databaseRole">databaseRole</a></code> | <code>string</code> | Cloud Spanner database role for fine-grained access control. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner.property.maxParallelism">maxParallelism</a></code> | <code>number</code> | Allows setting max parallelism per query when executing on Spanner independent compute resources. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner.property.useDataBoost">useDataBoost</a></code> | <code>boolean \| cdktn.IResolvable</code> | If set, the request will be executed via Spanner independent compute resources. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner.property.useParallelism">useParallelism</a></code> | <code>boolean \| cdktn.IResolvable</code> | If parallelism should be used when reading from Cloud Spanner. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner.property.useServerlessAnalytics">useServerlessAnalytics</a></code> | <code>boolean \| cdktn.IResolvable</code> | If the serverless analytics service should be used to read data from Cloud Spanner. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

Cloud Spanner database in the form 'project/instance/database'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#database GoogleBigqueryConnection#database}

---

##### `databaseRole`<sup>Optional</sup> <a name="databaseRole" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner.property.databaseRole"></a>

```typescript
public readonly databaseRole: string;
```

- *Type:* string

Cloud Spanner database role for fine-grained access control.

The Cloud Spanner admin should have provisioned the database role with appropriate permissions, such as 'SELECT' and 'INSERT'. Other users should only use roles provided by their Cloud Spanner admins. The database role name must start with a letter, and can only contain letters, numbers, and underscores. For more details, see https://cloud.google.com/spanner/docs/fgac-about.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#database_role GoogleBigqueryConnection#database_role}

---

##### `maxParallelism`<sup>Optional</sup> <a name="maxParallelism" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner.property.maxParallelism"></a>

```typescript
public readonly maxParallelism: number;
```

- *Type:* number

Allows setting max parallelism per query when executing on Spanner independent compute resources.

If unspecified, default values of parallelism are chosen that are dependent on the Cloud Spanner instance configuration. 'useParallelism' and 'useDataBoost' must be set when setting max parallelism.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#max_parallelism GoogleBigqueryConnection#max_parallelism}

---

##### `useDataBoost`<sup>Optional</sup> <a name="useDataBoost" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner.property.useDataBoost"></a>

```typescript
public readonly useDataBoost: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If set, the request will be executed via Spanner independent compute resources.

'use_parallelism' must be set when using data boost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#use_data_boost GoogleBigqueryConnection#use_data_boost}

---

##### `useParallelism`<sup>Optional</sup> <a name="useParallelism" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner.property.useParallelism"></a>

```typescript
public readonly useParallelism: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If parallelism should be used when reading from Cloud Spanner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#use_parallelism GoogleBigqueryConnection#use_parallelism}

---

##### `useServerlessAnalytics`<sup>Optional</sup> <a name="useServerlessAnalytics" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner.property.useServerlessAnalytics"></a>

```typescript
public readonly useServerlessAnalytics: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If the serverless analytics service should be used to read data from Cloud Spanner.

'useParallelism' must be set when using serverless analytics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#use_serverless_analytics GoogleBigqueryConnection#use_serverless_analytics}

---

### GoogleBigqueryConnectionCloudSql <a name="GoogleBigqueryConnectionCloudSql" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktn/provider-google-beta'

const googleBigqueryConnectionCloudSql: googleBigqueryConnection.GoogleBigqueryConnectionCloudSql = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql.property.credential">credential</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredential">GoogleBigqueryConnectionCloudSqlCredential</a></code> | credential block. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql.property.database">database</a></code> | <code>string</code> | Database name. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql.property.instanceId">instanceId</a></code> | <code>string</code> | Cloud SQL instance ID in the form project:location:instance. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql.property.type">type</a></code> | <code>string</code> | Type of the Cloud SQL database. Possible values: ["DATABASE_TYPE_UNSPECIFIED", "POSTGRES", "MYSQL"]. |

---

##### `credential`<sup>Required</sup> <a name="credential" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql.property.credential"></a>

```typescript
public readonly credential: GoogleBigqueryConnectionCloudSqlCredential;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredential">GoogleBigqueryConnectionCloudSqlCredential</a>

credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#credential GoogleBigqueryConnection#credential}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

Database name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#database GoogleBigqueryConnection#database}

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

Cloud SQL instance ID in the form project:location:instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#instance_id GoogleBigqueryConnection#instance_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of the Cloud SQL database. Possible values: ["DATABASE_TYPE_UNSPECIFIED", "POSTGRES", "MYSQL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#type GoogleBigqueryConnection#type}

---

### GoogleBigqueryConnectionCloudSqlCredential <a name="GoogleBigqueryConnectionCloudSqlCredential" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredential"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredential.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktn/provider-google-beta'

const googleBigqueryConnectionCloudSqlCredential: googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredential = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredential.property.password">password</a></code> | <code>string</code> | Password for database. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredential.property.username">username</a></code> | <code>string</code> | Username for database. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredential.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Password for database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#password GoogleBigqueryConnection#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredential.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Username for database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#username GoogleBigqueryConnection#username}

---

### GoogleBigqueryConnectionConfig <a name="GoogleBigqueryConnectionConfig" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktn/provider-google-beta'

const googleBigqueryConnectionConfig: googleBigqueryConnection.GoogleBigqueryConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.aws">aws</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAws">GoogleBigqueryConnectionAws</a></code> | aws block. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.azure">azure</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzure">GoogleBigqueryConnectionAzure</a></code> | azure block. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.cloudResource">cloudResource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResource">GoogleBigqueryConnectionCloudResource</a></code> | cloud_resource block. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.cloudSpanner">cloudSpanner</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner">GoogleBigqueryConnectionCloudSpanner</a></code> | cloud_spanner block. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.cloudSql">cloudSql</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql">GoogleBigqueryConnectionCloudSql</a></code> | cloud_sql block. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfiguration">GoogleBigqueryConnectionConfiguration</a></code> | configuration block. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.connectionId">connectionId</a></code> | <code>string</code> | Optional connection id that should be assigned to the created connection. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.description">description</a></code> | <code>string</code> | A descriptive description for the connection. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.friendlyName">friendlyName</a></code> | <code>string</code> | A descriptive name for the connection. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#id GoogleBigqueryConnection#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | Optional. The Cloud KMS key that is used for encryption. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.location">location</a></code> | <code>string</code> | The geographic location where the connection should reside. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#project GoogleBigqueryConnection#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.spark">spark</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSpark">GoogleBigqueryConnectionSpark</a></code> | spark block. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts">GoogleBigqueryConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `aws`<sup>Optional</sup> <a name="aws" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.aws"></a>

```typescript
public readonly aws: GoogleBigqueryConnectionAws;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAws">GoogleBigqueryConnectionAws</a>

aws block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#aws GoogleBigqueryConnection#aws}

---

##### `azure`<sup>Optional</sup> <a name="azure" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.azure"></a>

```typescript
public readonly azure: GoogleBigqueryConnectionAzure;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzure">GoogleBigqueryConnectionAzure</a>

azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#azure GoogleBigqueryConnection#azure}

---

##### `cloudResource`<sup>Optional</sup> <a name="cloudResource" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.cloudResource"></a>

```typescript
public readonly cloudResource: GoogleBigqueryConnectionCloudResource;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResource">GoogleBigqueryConnectionCloudResource</a>

cloud_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#cloud_resource GoogleBigqueryConnection#cloud_resource}

---

##### `cloudSpanner`<sup>Optional</sup> <a name="cloudSpanner" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.cloudSpanner"></a>

```typescript
public readonly cloudSpanner: GoogleBigqueryConnectionCloudSpanner;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner">GoogleBigqueryConnectionCloudSpanner</a>

cloud_spanner block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#cloud_spanner GoogleBigqueryConnection#cloud_spanner}

---

##### `cloudSql`<sup>Optional</sup> <a name="cloudSql" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.cloudSql"></a>

```typescript
public readonly cloudSql: GoogleBigqueryConnectionCloudSql;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql">GoogleBigqueryConnectionCloudSql</a>

cloud_sql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#cloud_sql GoogleBigqueryConnection#cloud_sql}

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.configuration"></a>

```typescript
public readonly configuration: GoogleBigqueryConnectionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfiguration">GoogleBigqueryConnectionConfiguration</a>

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#configuration GoogleBigqueryConnection#configuration}

---

##### `connectionId`<sup>Optional</sup> <a name="connectionId" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

Optional connection id that should be assigned to the created connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#connection_id GoogleBigqueryConnection#connection_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#deletion_policy GoogleBigqueryConnection#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A descriptive description for the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#description GoogleBigqueryConnection#description}

---

##### `friendlyName`<sup>Optional</sup> <a name="friendlyName" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.friendlyName"></a>

```typescript
public readonly friendlyName: string;
```

- *Type:* string

A descriptive name for the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#friendly_name GoogleBigqueryConnection#friendly_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#id GoogleBigqueryConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

Optional. The Cloud KMS key that is used for encryption.

Example: projects/[kms_project_id]/locations/[region]/keyRings/[key_region]/cryptoKeys/[key]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#kms_key_name GoogleBigqueryConnection#kms_key_name}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The geographic location where the connection should reside.

Cloud SQL instance must be in the same location as the connection
with following exceptions: Cloud SQL us-central1 maps to BigQuery US, Cloud SQL europe-west1 maps to BigQuery EU.
Examples: US, EU, asia-northeast1, us-central1, europe-west1.
Spanner Connections same as spanner region
AWS allowed regions are aws-us-east-1
Azure allowed regions are azure-eastus2

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#location GoogleBigqueryConnection#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#project GoogleBigqueryConnection#project}.

---

##### `spark`<sup>Optional</sup> <a name="spark" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.spark"></a>

```typescript
public readonly spark: GoogleBigqueryConnectionSpark;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSpark">GoogleBigqueryConnectionSpark</a>

spark block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#spark GoogleBigqueryConnection#spark}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleBigqueryConnectionTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts">GoogleBigqueryConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#timeouts GoogleBigqueryConnection#timeouts}

---

### GoogleBigqueryConnectionConfiguration <a name="GoogleBigqueryConnectionConfiguration" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfiguration.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktn/provider-google-beta'

const googleBigqueryConnectionConfiguration: googleBigqueryConnection.GoogleBigqueryConnectionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfiguration.property.asset">asset</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAsset">GoogleBigqueryConnectionConfigurationAsset</a></code> | asset block. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfiguration.property.connectorId">connectorId</a></code> | <code>string</code> | The ID of the connector. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfiguration.property.authentication">authentication</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthentication">GoogleBigqueryConnectionConfigurationAuthentication</a></code> | authentication block. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfiguration.property.endpoint">endpoint</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpoint">GoogleBigqueryConnectionConfigurationEndpoint</a></code> | endpoint block. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfiguration.property.network">network</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetwork">GoogleBigqueryConnectionConfigurationNetwork</a></code> | network block. |

---

##### `asset`<sup>Required</sup> <a name="asset" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfiguration.property.asset"></a>

```typescript
public readonly asset: GoogleBigqueryConnectionConfigurationAsset;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAsset">GoogleBigqueryConnectionConfigurationAsset</a>

asset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#asset GoogleBigqueryConnection#asset}

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfiguration.property.connectorId"></a>

```typescript
public readonly connectorId: string;
```

- *Type:* string

The ID of the connector.

Possible values include 'google-alloydb', 'google-cloudsql-mysql',
'google-cloudsql-postgres', and other connector IDs supported by the BigQuery Connector framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#connector_id GoogleBigqueryConnection#connector_id}

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfiguration.property.authentication"></a>

```typescript
public readonly authentication: GoogleBigqueryConnectionConfigurationAuthentication;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthentication">GoogleBigqueryConnectionConfigurationAuthentication</a>

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#authentication GoogleBigqueryConnection#authentication}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfiguration.property.endpoint"></a>

```typescript
public readonly endpoint: GoogleBigqueryConnectionConfigurationEndpoint;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpoint">GoogleBigqueryConnectionConfigurationEndpoint</a>

endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#endpoint GoogleBigqueryConnection#endpoint}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfiguration.property.network"></a>

```typescript
public readonly network: GoogleBigqueryConnectionConfigurationNetwork;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetwork">GoogleBigqueryConnectionConfigurationNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#network GoogleBigqueryConnection#network}

---

### GoogleBigqueryConnectionConfigurationAsset <a name="GoogleBigqueryConnectionConfigurationAsset" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAsset"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAsset.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktn/provider-google-beta'

const googleBigqueryConnectionConfigurationAsset: googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAsset = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAsset.property.database">database</a></code> | <code>string</code> | The name of the database. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAsset.property.googleCloudResource">googleCloudResource</a></code> | <code>string</code> | The full resource name of the Google Cloud resource. For AlloyDB, this is in the format of '//alloydb.googleapis.com/projects/{project}/locations/{region}/clusters/{cluster}/instances/{instance}'. |

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAsset.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

The name of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#database GoogleBigqueryConnection#database}

---

##### `googleCloudResource`<sup>Optional</sup> <a name="googleCloudResource" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAsset.property.googleCloudResource"></a>

```typescript
public readonly googleCloudResource: string;
```

- *Type:* string

The full resource name of the Google Cloud resource. For AlloyDB, this is in the format of '//alloydb.googleapis.com/projects/{project}/locations/{region}/clusters/{cluster}/instances/{instance}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#google_cloud_resource GoogleBigqueryConnection#google_cloud_resource}

---

### GoogleBigqueryConnectionConfigurationAuthentication <a name="GoogleBigqueryConnectionConfigurationAuthentication" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthentication.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktn/provider-google-beta'

const googleBigqueryConnectionConfigurationAuthentication: googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthentication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthentication.property.usernamePassword">usernamePassword</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePassword">GoogleBigqueryConnectionConfigurationAuthenticationUsernamePassword</a></code> | username_password block. |

---

##### `usernamePassword`<sup>Optional</sup> <a name="usernamePassword" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthentication.property.usernamePassword"></a>

```typescript
public readonly usernamePassword: GoogleBigqueryConnectionConfigurationAuthenticationUsernamePassword;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePassword">GoogleBigqueryConnectionConfigurationAuthenticationUsernamePassword</a>

username_password block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#username_password GoogleBigqueryConnection#username_password}

---

### GoogleBigqueryConnectionConfigurationAuthenticationUsernamePassword <a name="GoogleBigqueryConnectionConfigurationAuthenticationUsernamePassword" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePassword"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePassword.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktn/provider-google-beta'

const googleBigqueryConnectionConfigurationAuthenticationUsernamePassword: googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePassword = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePassword.property.password">password</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPassword">GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPassword</a></code> | password block. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePassword.property.username">username</a></code> | <code>string</code> | Username for the connector. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePassword.property.password"></a>

```typescript
public readonly password: GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPassword;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPassword">GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPassword</a>

password block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#password GoogleBigqueryConnection#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePassword.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Username for the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#username GoogleBigqueryConnection#username}

---

### GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPassword <a name="GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPassword" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPassword"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPassword.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktn/provider-google-beta'

const googleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPassword: googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPassword = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPassword.property.plaintext">plaintext</a></code> | <code>string</code> | The plaintext password. |

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPassword.property.plaintext"></a>

```typescript
public readonly plaintext: string;
```

- *Type:* string

The plaintext password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#plaintext GoogleBigqueryConnection#plaintext}

---

### GoogleBigqueryConnectionConfigurationEndpoint <a name="GoogleBigqueryConnectionConfigurationEndpoint" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpoint.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktn/provider-google-beta'

const googleBigqueryConnectionConfigurationEndpoint: googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpoint.property.hostPort">hostPort</a></code> | <code>string</code> | Host and port in the format of 'host:port' for the connector endpoint. |

---

##### `hostPort`<sup>Optional</sup> <a name="hostPort" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpoint.property.hostPort"></a>

```typescript
public readonly hostPort: string;
```

- *Type:* string

Host and port in the format of 'host:port' for the connector endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#host_port GoogleBigqueryConnection#host_port}

---

### GoogleBigqueryConnectionConfigurationNetwork <a name="GoogleBigqueryConnectionConfigurationNetwork" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetwork.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktn/provider-google-beta'

const googleBigqueryConnectionConfigurationNetwork: googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetwork = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetwork.property.privateServiceConnect">privateServiceConnect</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnect">GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnect</a></code> | private_service_connect block. |

---

##### `privateServiceConnect`<sup>Optional</sup> <a name="privateServiceConnect" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetwork.property.privateServiceConnect"></a>

```typescript
public readonly privateServiceConnect: GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnect;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnect">GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnect</a>

private_service_connect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#private_service_connect GoogleBigqueryConnection#private_service_connect}

---

### GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnect <a name="GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnect" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnect.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktn/provider-google-beta'

const googleBigqueryConnectionConfigurationNetworkPrivateServiceConnect: googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnect = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnect.property.networkAttachment">networkAttachment</a></code> | <code>string</code> | The resource name of a network attachment in the format of 'projects/{project}/regions/{region}/networkAttachments/{networkAttachment}'. |

---

##### `networkAttachment`<sup>Required</sup> <a name="networkAttachment" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnect.property.networkAttachment"></a>

```typescript
public readonly networkAttachment: string;
```

- *Type:* string

The resource name of a network attachment in the format of 'projects/{project}/regions/{region}/networkAttachments/{networkAttachment}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#network_attachment GoogleBigqueryConnection#network_attachment}

---

### GoogleBigqueryConnectionSpark <a name="GoogleBigqueryConnectionSpark" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSpark"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSpark.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktn/provider-google-beta'

const googleBigqueryConnectionSpark: googleBigqueryConnection.GoogleBigqueryConnectionSpark = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSpark.property.metastoreServiceConfig">metastoreServiceConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfig">GoogleBigqueryConnectionSparkMetastoreServiceConfig</a></code> | metastore_service_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSpark.property.sparkHistoryServerConfig">sparkHistoryServerConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfig">GoogleBigqueryConnectionSparkSparkHistoryServerConfig</a></code> | spark_history_server_config block. |

---

##### `metastoreServiceConfig`<sup>Optional</sup> <a name="metastoreServiceConfig" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSpark.property.metastoreServiceConfig"></a>

```typescript
public readonly metastoreServiceConfig: GoogleBigqueryConnectionSparkMetastoreServiceConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfig">GoogleBigqueryConnectionSparkMetastoreServiceConfig</a>

metastore_service_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#metastore_service_config GoogleBigqueryConnection#metastore_service_config}

---

##### `sparkHistoryServerConfig`<sup>Optional</sup> <a name="sparkHistoryServerConfig" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSpark.property.sparkHistoryServerConfig"></a>

```typescript
public readonly sparkHistoryServerConfig: GoogleBigqueryConnectionSparkSparkHistoryServerConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfig">GoogleBigqueryConnectionSparkSparkHistoryServerConfig</a>

spark_history_server_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#spark_history_server_config GoogleBigqueryConnection#spark_history_server_config}

---

### GoogleBigqueryConnectionSparkMetastoreServiceConfig <a name="GoogleBigqueryConnectionSparkMetastoreServiceConfig" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfig.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktn/provider-google-beta'

const googleBigqueryConnectionSparkMetastoreServiceConfig: googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfig.property.metastoreService">metastoreService</a></code> | <code>string</code> | Resource name of an existing Dataproc Metastore service in the form of projects/[projectId]/locations/[region]/services/[serviceId]. |

---

##### `metastoreService`<sup>Optional</sup> <a name="metastoreService" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfig.property.metastoreService"></a>

```typescript
public readonly metastoreService: string;
```

- *Type:* string

Resource name of an existing Dataproc Metastore service in the form of projects/[projectId]/locations/[region]/services/[serviceId].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#metastore_service GoogleBigqueryConnection#metastore_service}

---

### GoogleBigqueryConnectionSparkSparkHistoryServerConfig <a name="GoogleBigqueryConnectionSparkSparkHistoryServerConfig" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfig.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktn/provider-google-beta'

const googleBigqueryConnectionSparkSparkHistoryServerConfig: googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfig.property.dataprocCluster">dataprocCluster</a></code> | <code>string</code> | Resource name of an existing Dataproc Cluster to act as a Spark History Server for the connection if the form of projects/[projectId]/regions/[region]/clusters/[cluster_name]. |

---

##### `dataprocCluster`<sup>Optional</sup> <a name="dataprocCluster" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfig.property.dataprocCluster"></a>

```typescript
public readonly dataprocCluster: string;
```

- *Type:* string

Resource name of an existing Dataproc Cluster to act as a Spark History Server for the connection if the form of projects/[projectId]/regions/[region]/clusters/[cluster_name].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#dataproc_cluster GoogleBigqueryConnection#dataproc_cluster}

---

### GoogleBigqueryConnectionTimeouts <a name="GoogleBigqueryConnectionTimeouts" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktn/provider-google-beta'

const googleBigqueryConnectionTimeouts: googleBigqueryConnection.GoogleBigqueryConnectionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#create GoogleBigqueryConnection#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#delete GoogleBigqueryConnection#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#update GoogleBigqueryConnection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#create GoogleBigqueryConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#delete GoogleBigqueryConnection#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_bigquery_connection#update GoogleBigqueryConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigqueryConnectionAwsAccessRoleOutputReference <a name="GoogleBigqueryConnectionAwsAccessRoleOutputReference" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktn/provider-google-beta'

new googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.property.identity">identity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.property.iamRoleIdInput">iamRoleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.property.iamRoleId">iamRoleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRole">GoogleBigqueryConnectionAwsAccessRole</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.property.identity"></a>

```typescript
public readonly identity: string;
```

- *Type:* string

---

##### `iamRoleIdInput`<sup>Optional</sup> <a name="iamRoleIdInput" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.property.iamRoleIdInput"></a>

```typescript
public readonly iamRoleIdInput: string;
```

- *Type:* string

---

##### `iamRoleId`<sup>Required</sup> <a name="iamRoleId" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.property.iamRoleId"></a>

```typescript
public readonly iamRoleId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBigqueryConnectionAwsAccessRole;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRole">GoogleBigqueryConnectionAwsAccessRole</a>

---


### GoogleBigqueryConnectionAwsOutputReference <a name="GoogleBigqueryConnectionAwsOutputReference" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktn/provider-google-beta'

new googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.putAccessRole">putAccessRole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAccessRole` <a name="putAccessRole" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.putAccessRole"></a>

```typescript
public putAccessRole(value: GoogleBigqueryConnectionAwsAccessRole): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.putAccessRole.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRole">GoogleBigqueryConnectionAwsAccessRole</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.property.accessRole">accessRole</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference">GoogleBigqueryConnectionAwsAccessRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.property.accessRoleInput">accessRoleInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRole">GoogleBigqueryConnectionAwsAccessRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAws">GoogleBigqueryConnectionAws</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessRole`<sup>Required</sup> <a name="accessRole" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.property.accessRole"></a>

```typescript
public readonly accessRole: GoogleBigqueryConnectionAwsAccessRoleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRoleOutputReference">GoogleBigqueryConnectionAwsAccessRoleOutputReference</a>

---

##### `accessRoleInput`<sup>Optional</sup> <a name="accessRoleInput" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.property.accessRoleInput"></a>

```typescript
public readonly accessRoleInput: GoogleBigqueryConnectionAwsAccessRole;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsAccessRole">GoogleBigqueryConnectionAwsAccessRole</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAwsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBigqueryConnectionAws;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAws">GoogleBigqueryConnectionAws</a>

---


### GoogleBigqueryConnectionAzureOutputReference <a name="GoogleBigqueryConnectionAzureOutputReference" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktn/provider-google-beta'

new googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.resetFederatedApplicationClientId">resetFederatedApplicationClientId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFederatedApplicationClientId` <a name="resetFederatedApplicationClientId" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.resetFederatedApplicationClientId"></a>

```typescript
public resetFederatedApplicationClientId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.application">application</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.identity">identity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.objectId">objectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.redirectUri">redirectUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.customerTenantIdInput">customerTenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.federatedApplicationClientIdInput">federatedApplicationClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.customerTenantId">customerTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.federatedApplicationClientId">federatedApplicationClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzure">GoogleBigqueryConnectionAzure</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `application`<sup>Required</sup> <a name="application" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.application"></a>

```typescript
public readonly application: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.identity"></a>

```typescript
public readonly identity: string;
```

- *Type:* string

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

---

##### `redirectUri`<sup>Required</sup> <a name="redirectUri" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.redirectUri"></a>

```typescript
public readonly redirectUri: string;
```

- *Type:* string

---

##### `customerTenantIdInput`<sup>Optional</sup> <a name="customerTenantIdInput" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.customerTenantIdInput"></a>

```typescript
public readonly customerTenantIdInput: string;
```

- *Type:* string

---

##### `federatedApplicationClientIdInput`<sup>Optional</sup> <a name="federatedApplicationClientIdInput" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.federatedApplicationClientIdInput"></a>

```typescript
public readonly federatedApplicationClientIdInput: string;
```

- *Type:* string

---

##### `customerTenantId`<sup>Required</sup> <a name="customerTenantId" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.customerTenantId"></a>

```typescript
public readonly customerTenantId: string;
```

- *Type:* string

---

##### `federatedApplicationClientId`<sup>Required</sup> <a name="federatedApplicationClientId" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.federatedApplicationClientId"></a>

```typescript
public readonly federatedApplicationClientId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzureOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBigqueryConnectionAzure;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionAzure">GoogleBigqueryConnectionAzure</a>

---


### GoogleBigqueryConnectionCloudResourceOutputReference <a name="GoogleBigqueryConnectionCloudResourceOutputReference" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktn/provider-google-beta'

new googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.property.serviceAccountId">serviceAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResource">GoogleBigqueryConnectionCloudResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceAccountId`<sup>Required</sup> <a name="serviceAccountId" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.property.serviceAccountId"></a>

```typescript
public readonly serviceAccountId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBigqueryConnectionCloudResource;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudResource">GoogleBigqueryConnectionCloudResource</a>

---


### GoogleBigqueryConnectionCloudSpannerOutputReference <a name="GoogleBigqueryConnectionCloudSpannerOutputReference" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktn/provider-google-beta'

new googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.resetDatabaseRole">resetDatabaseRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.resetMaxParallelism">resetMaxParallelism</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.resetUseDataBoost">resetUseDataBoost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.resetUseParallelism">resetUseParallelism</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.resetUseServerlessAnalytics">resetUseServerlessAnalytics</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatabaseRole` <a name="resetDatabaseRole" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.resetDatabaseRole"></a>

```typescript
public resetDatabaseRole(): void
```

##### `resetMaxParallelism` <a name="resetMaxParallelism" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.resetMaxParallelism"></a>

```typescript
public resetMaxParallelism(): void
```

##### `resetUseDataBoost` <a name="resetUseDataBoost" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.resetUseDataBoost"></a>

```typescript
public resetUseDataBoost(): void
```

##### `resetUseParallelism` <a name="resetUseParallelism" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.resetUseParallelism"></a>

```typescript
public resetUseParallelism(): void
```

##### `resetUseServerlessAnalytics` <a name="resetUseServerlessAnalytics" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.resetUseServerlessAnalytics"></a>

```typescript
public resetUseServerlessAnalytics(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.databaseRoleInput">databaseRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.maxParallelismInput">maxParallelismInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.useDataBoostInput">useDataBoostInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.useParallelismInput">useParallelismInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.useServerlessAnalyticsInput">useServerlessAnalyticsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.databaseRole">databaseRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.maxParallelism">maxParallelism</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.useDataBoost">useDataBoost</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.useParallelism">useParallelism</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.useServerlessAnalytics">useServerlessAnalytics</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner">GoogleBigqueryConnectionCloudSpanner</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `databaseRoleInput`<sup>Optional</sup> <a name="databaseRoleInput" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.databaseRoleInput"></a>

```typescript
public readonly databaseRoleInput: string;
```

- *Type:* string

---

##### `maxParallelismInput`<sup>Optional</sup> <a name="maxParallelismInput" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.maxParallelismInput"></a>

```typescript
public readonly maxParallelismInput: number;
```

- *Type:* number

---

##### `useDataBoostInput`<sup>Optional</sup> <a name="useDataBoostInput" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.useDataBoostInput"></a>

```typescript
public readonly useDataBoostInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `useParallelismInput`<sup>Optional</sup> <a name="useParallelismInput" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.useParallelismInput"></a>

```typescript
public readonly useParallelismInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `useServerlessAnalyticsInput`<sup>Optional</sup> <a name="useServerlessAnalyticsInput" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.useServerlessAnalyticsInput"></a>

```typescript
public readonly useServerlessAnalyticsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `databaseRole`<sup>Required</sup> <a name="databaseRole" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.databaseRole"></a>

```typescript
public readonly databaseRole: string;
```

- *Type:* string

---

##### `maxParallelism`<sup>Required</sup> <a name="maxParallelism" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.maxParallelism"></a>

```typescript
public readonly maxParallelism: number;
```

- *Type:* number

---

##### `useDataBoost`<sup>Required</sup> <a name="useDataBoost" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.useDataBoost"></a>

```typescript
public readonly useDataBoost: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `useParallelism`<sup>Required</sup> <a name="useParallelism" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.useParallelism"></a>

```typescript
public readonly useParallelism: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `useServerlessAnalytics`<sup>Required</sup> <a name="useServerlessAnalytics" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.useServerlessAnalytics"></a>

```typescript
public readonly useServerlessAnalytics: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpannerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBigqueryConnectionCloudSpanner;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSpanner">GoogleBigqueryConnectionCloudSpanner</a>

---


### GoogleBigqueryConnectionCloudSqlCredentialOutputReference <a name="GoogleBigqueryConnectionCloudSqlCredentialOutputReference" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktn/provider-google-beta'

new googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredential">GoogleBigqueryConnectionCloudSqlCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBigqueryConnectionCloudSqlCredential;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredential">GoogleBigqueryConnectionCloudSqlCredential</a>

---


### GoogleBigqueryConnectionCloudSqlOutputReference <a name="GoogleBigqueryConnectionCloudSqlOutputReference" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktn/provider-google-beta'

new googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.putCredential">putCredential</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCredential` <a name="putCredential" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.putCredential"></a>

```typescript
public putCredential(value: GoogleBigqueryConnectionCloudSqlCredential): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.putCredential.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredential">GoogleBigqueryConnectionCloudSqlCredential</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.credential">credential</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference">GoogleBigqueryConnectionCloudSqlCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.serviceAccountId">serviceAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.credentialInput">credentialInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredential">GoogleBigqueryConnectionCloudSqlCredential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql">GoogleBigqueryConnectionCloudSql</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `credential`<sup>Required</sup> <a name="credential" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.credential"></a>

```typescript
public readonly credential: GoogleBigqueryConnectionCloudSqlCredentialOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredentialOutputReference">GoogleBigqueryConnectionCloudSqlCredentialOutputReference</a>

---

##### `serviceAccountId`<sup>Required</sup> <a name="serviceAccountId" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.serviceAccountId"></a>

```typescript
public readonly serviceAccountId: string;
```

- *Type:* string

---

##### `credentialInput`<sup>Optional</sup> <a name="credentialInput" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.credentialInput"></a>

```typescript
public readonly credentialInput: GoogleBigqueryConnectionCloudSqlCredential;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlCredential">GoogleBigqueryConnectionCloudSqlCredential</a>

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSqlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBigqueryConnectionCloudSql;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionCloudSql">GoogleBigqueryConnectionCloudSql</a>

---


### GoogleBigqueryConnectionConfigurationAssetOutputReference <a name="GoogleBigqueryConnectionConfigurationAssetOutputReference" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktn/provider-google-beta'

new googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.resetGoogleCloudResource">resetGoogleCloudResource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatabase` <a name="resetDatabase" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.resetDatabase"></a>

```typescript
public resetDatabase(): void
```

##### `resetGoogleCloudResource` <a name="resetGoogleCloudResource" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.resetGoogleCloudResource"></a>

```typescript
public resetGoogleCloudResource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.property.googleCloudResourceInput">googleCloudResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.property.googleCloudResource">googleCloudResource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAsset">GoogleBigqueryConnectionConfigurationAsset</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `googleCloudResourceInput`<sup>Optional</sup> <a name="googleCloudResourceInput" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.property.googleCloudResourceInput"></a>

```typescript
public readonly googleCloudResourceInput: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `googleCloudResource`<sup>Required</sup> <a name="googleCloudResource" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.property.googleCloudResource"></a>

```typescript
public readonly googleCloudResource: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBigqueryConnectionConfigurationAsset;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAsset">GoogleBigqueryConnectionConfigurationAsset</a>

---


### GoogleBigqueryConnectionConfigurationAuthenticationOutputReference <a name="GoogleBigqueryConnectionConfigurationAuthenticationOutputReference" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktn/provider-google-beta'

new googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.putUsernamePassword">putUsernamePassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.resetUsernamePassword">resetUsernamePassword</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putUsernamePassword` <a name="putUsernamePassword" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.putUsernamePassword"></a>

```typescript
public putUsernamePassword(value: GoogleBigqueryConnectionConfigurationAuthenticationUsernamePassword): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.putUsernamePassword.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePassword">GoogleBigqueryConnectionConfigurationAuthenticationUsernamePassword</a>

---

##### `resetUsernamePassword` <a name="resetUsernamePassword" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.resetUsernamePassword"></a>

```typescript
public resetUsernamePassword(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.property.usernamePassword">usernamePassword</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference">GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.property.usernamePasswordInput">usernamePasswordInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePassword">GoogleBigqueryConnectionConfigurationAuthenticationUsernamePassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthentication">GoogleBigqueryConnectionConfigurationAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `usernamePassword`<sup>Required</sup> <a name="usernamePassword" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.property.usernamePassword"></a>

```typescript
public readonly usernamePassword: GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference">GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference</a>

---

##### `usernamePasswordInput`<sup>Optional</sup> <a name="usernamePasswordInput" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.property.usernamePasswordInput"></a>

```typescript
public readonly usernamePasswordInput: GoogleBigqueryConnectionConfigurationAuthenticationUsernamePassword;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePassword">GoogleBigqueryConnectionConfigurationAuthenticationUsernamePassword</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBigqueryConnectionConfigurationAuthentication;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthentication">GoogleBigqueryConnectionConfigurationAuthentication</a>

---


### GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference <a name="GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktn/provider-google-beta'

new googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.putPassword">putPassword</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPassword` <a name="putPassword" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.putPassword"></a>

```typescript
public putPassword(value: GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPassword): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.putPassword.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPassword">GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPassword</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.property.password">password</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference">GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.property.passwordInput">passwordInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPassword">GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePassword">GoogleBigqueryConnectionConfigurationAuthenticationUsernamePassword</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.property.password"></a>

```typescript
public readonly password: GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference">GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference</a>

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPassword;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPassword">GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPassword</a>

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBigqueryConnectionConfigurationAuthenticationUsernamePassword;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePassword">GoogleBigqueryConnectionConfigurationAuthenticationUsernamePassword</a>

---


### GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference <a name="GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktn/provider-google-beta'

new googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference.property.secretType">secretType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference.property.plaintextInput">plaintextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference.property.plaintext">plaintext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPassword">GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPassword</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretType`<sup>Required</sup> <a name="secretType" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference.property.secretType"></a>

```typescript
public readonly secretType: string;
```

- *Type:* string

---

##### `plaintextInput`<sup>Optional</sup> <a name="plaintextInput" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference.property.plaintextInput"></a>

```typescript
public readonly plaintextInput: string;
```

- *Type:* string

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference.property.plaintext"></a>

```typescript
public readonly plaintext: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPasswordOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPassword;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPassword">GoogleBigqueryConnectionConfigurationAuthenticationUsernamePasswordPassword</a>

---


### GoogleBigqueryConnectionConfigurationEndpointOutputReference <a name="GoogleBigqueryConnectionConfigurationEndpointOutputReference" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktn/provider-google-beta'

new googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference.resetHostPort">resetHostPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHostPort` <a name="resetHostPort" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference.resetHostPort"></a>

```typescript
public resetHostPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference.property.hostPortInput">hostPortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference.property.hostPort">hostPort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpoint">GoogleBigqueryConnectionConfigurationEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostPortInput`<sup>Optional</sup> <a name="hostPortInput" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference.property.hostPortInput"></a>

```typescript
public readonly hostPortInput: string;
```

- *Type:* string

---

##### `hostPort`<sup>Required</sup> <a name="hostPort" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference.property.hostPort"></a>

```typescript
public readonly hostPort: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBigqueryConnectionConfigurationEndpoint;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpoint">GoogleBigqueryConnectionConfigurationEndpoint</a>

---


### GoogleBigqueryConnectionConfigurationNetworkOutputReference <a name="GoogleBigqueryConnectionConfigurationNetworkOutputReference" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktn/provider-google-beta'

new googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference.putPrivateServiceConnect">putPrivateServiceConnect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference.resetPrivateServiceConnect">resetPrivateServiceConnect</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrivateServiceConnect` <a name="putPrivateServiceConnect" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference.putPrivateServiceConnect"></a>

```typescript
public putPrivateServiceConnect(value: GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnect): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference.putPrivateServiceConnect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnect">GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnect</a>

---

##### `resetPrivateServiceConnect` <a name="resetPrivateServiceConnect" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference.resetPrivateServiceConnect"></a>

```typescript
public resetPrivateServiceConnect(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference.property.privateServiceConnect">privateServiceConnect</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference">GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference.property.privateServiceConnectInput">privateServiceConnectInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnect">GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetwork">GoogleBigqueryConnectionConfigurationNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `privateServiceConnect`<sup>Required</sup> <a name="privateServiceConnect" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference.property.privateServiceConnect"></a>

```typescript
public readonly privateServiceConnect: GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference">GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference</a>

---

##### `privateServiceConnectInput`<sup>Optional</sup> <a name="privateServiceConnectInput" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference.property.privateServiceConnectInput"></a>

```typescript
public readonly privateServiceConnectInput: GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnect;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnect">GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnect</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBigqueryConnectionConfigurationNetwork;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetwork">GoogleBigqueryConnectionConfigurationNetwork</a>

---


### GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference <a name="GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktn/provider-google-beta'

new googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference.property.networkAttachmentInput">networkAttachmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference.property.networkAttachment">networkAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnect">GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkAttachmentInput`<sup>Optional</sup> <a name="networkAttachmentInput" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference.property.networkAttachmentInput"></a>

```typescript
public readonly networkAttachmentInput: string;
```

- *Type:* string

---

##### `networkAttachment`<sup>Required</sup> <a name="networkAttachment" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference.property.networkAttachment"></a>

```typescript
public readonly networkAttachment: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnect;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnect">GoogleBigqueryConnectionConfigurationNetworkPrivateServiceConnect</a>

---


### GoogleBigqueryConnectionConfigurationOutputReference <a name="GoogleBigqueryConnectionConfigurationOutputReference" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktn/provider-google-beta'

new googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.putAsset">putAsset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.putAuthentication">putAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.putEndpoint">putEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.putNetwork">putNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.resetAuthentication">resetAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.resetNetwork">resetNetwork</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAsset` <a name="putAsset" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.putAsset"></a>

```typescript
public putAsset(value: GoogleBigqueryConnectionConfigurationAsset): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.putAsset.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAsset">GoogleBigqueryConnectionConfigurationAsset</a>

---

##### `putAuthentication` <a name="putAuthentication" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.putAuthentication"></a>

```typescript
public putAuthentication(value: GoogleBigqueryConnectionConfigurationAuthentication): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.putAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthentication">GoogleBigqueryConnectionConfigurationAuthentication</a>

---

##### `putEndpoint` <a name="putEndpoint" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.putEndpoint"></a>

```typescript
public putEndpoint(value: GoogleBigqueryConnectionConfigurationEndpoint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.putEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpoint">GoogleBigqueryConnectionConfigurationEndpoint</a>

---

##### `putNetwork` <a name="putNetwork" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.putNetwork"></a>

```typescript
public putNetwork(value: GoogleBigqueryConnectionConfigurationNetwork): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.putNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetwork">GoogleBigqueryConnectionConfigurationNetwork</a>

---

##### `resetAuthentication` <a name="resetAuthentication" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.resetAuthentication"></a>

```typescript
public resetAuthentication(): void
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.resetEndpoint"></a>

```typescript
public resetEndpoint(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.resetNetwork"></a>

```typescript
public resetNetwork(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.property.asset">asset</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference">GoogleBigqueryConnectionConfigurationAssetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.property.authentication">authentication</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference">GoogleBigqueryConnectionConfigurationAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.property.endpoint">endpoint</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference">GoogleBigqueryConnectionConfigurationEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.property.network">network</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference">GoogleBigqueryConnectionConfigurationNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.property.assetInput">assetInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAsset">GoogleBigqueryConnectionConfigurationAsset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.property.authenticationInput">authenticationInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthentication">GoogleBigqueryConnectionConfigurationAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.property.connectorIdInput">connectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.property.endpointInput">endpointInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpoint">GoogleBigqueryConnectionConfigurationEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.property.networkInput">networkInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetwork">GoogleBigqueryConnectionConfigurationNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.property.connectorId">connectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfiguration">GoogleBigqueryConnectionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `asset`<sup>Required</sup> <a name="asset" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.property.asset"></a>

```typescript
public readonly asset: GoogleBigqueryConnectionConfigurationAssetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAssetOutputReference">GoogleBigqueryConnectionConfigurationAssetOutputReference</a>

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.property.authentication"></a>

```typescript
public readonly authentication: GoogleBigqueryConnectionConfigurationAuthenticationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthenticationOutputReference">GoogleBigqueryConnectionConfigurationAuthenticationOutputReference</a>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: GoogleBigqueryConnectionConfigurationEndpointOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpointOutputReference">GoogleBigqueryConnectionConfigurationEndpointOutputReference</a>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.property.network"></a>

```typescript
public readonly network: GoogleBigqueryConnectionConfigurationNetworkOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetworkOutputReference">GoogleBigqueryConnectionConfigurationNetworkOutputReference</a>

---

##### `assetInput`<sup>Optional</sup> <a name="assetInput" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.property.assetInput"></a>

```typescript
public readonly assetInput: GoogleBigqueryConnectionConfigurationAsset;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAsset">GoogleBigqueryConnectionConfigurationAsset</a>

---

##### `authenticationInput`<sup>Optional</sup> <a name="authenticationInput" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.property.authenticationInput"></a>

```typescript
public readonly authenticationInput: GoogleBigqueryConnectionConfigurationAuthentication;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationAuthentication">GoogleBigqueryConnectionConfigurationAuthentication</a>

---

##### `connectorIdInput`<sup>Optional</sup> <a name="connectorIdInput" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.property.connectorIdInput"></a>

```typescript
public readonly connectorIdInput: string;
```

- *Type:* string

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.property.endpointInput"></a>

```typescript
public readonly endpointInput: GoogleBigqueryConnectionConfigurationEndpoint;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationEndpoint">GoogleBigqueryConnectionConfigurationEndpoint</a>

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.property.networkInput"></a>

```typescript
public readonly networkInput: GoogleBigqueryConnectionConfigurationNetwork;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationNetwork">GoogleBigqueryConnectionConfigurationNetwork</a>

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.property.connectorId"></a>

```typescript
public readonly connectorId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBigqueryConnectionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionConfiguration">GoogleBigqueryConnectionConfiguration</a>

---


### GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference <a name="GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktn/provider-google-beta'

new googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.resetMetastoreService">resetMetastoreService</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetastoreService` <a name="resetMetastoreService" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.resetMetastoreService"></a>

```typescript
public resetMetastoreService(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.metastoreServiceInput">metastoreServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.metastoreService">metastoreService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfig">GoogleBigqueryConnectionSparkMetastoreServiceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metastoreServiceInput`<sup>Optional</sup> <a name="metastoreServiceInput" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.metastoreServiceInput"></a>

```typescript
public readonly metastoreServiceInput: string;
```

- *Type:* string

---

##### `metastoreService`<sup>Required</sup> <a name="metastoreService" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.metastoreService"></a>

```typescript
public readonly metastoreService: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBigqueryConnectionSparkMetastoreServiceConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfig">GoogleBigqueryConnectionSparkMetastoreServiceConfig</a>

---


### GoogleBigqueryConnectionSparkOutputReference <a name="GoogleBigqueryConnectionSparkOutputReference" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktn/provider-google-beta'

new googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.putMetastoreServiceConfig">putMetastoreServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.putSparkHistoryServerConfig">putSparkHistoryServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.resetMetastoreServiceConfig">resetMetastoreServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.resetSparkHistoryServerConfig">resetSparkHistoryServerConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetastoreServiceConfig` <a name="putMetastoreServiceConfig" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.putMetastoreServiceConfig"></a>

```typescript
public putMetastoreServiceConfig(value: GoogleBigqueryConnectionSparkMetastoreServiceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.putMetastoreServiceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfig">GoogleBigqueryConnectionSparkMetastoreServiceConfig</a>

---

##### `putSparkHistoryServerConfig` <a name="putSparkHistoryServerConfig" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.putSparkHistoryServerConfig"></a>

```typescript
public putSparkHistoryServerConfig(value: GoogleBigqueryConnectionSparkSparkHistoryServerConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.putSparkHistoryServerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfig">GoogleBigqueryConnectionSparkSparkHistoryServerConfig</a>

---

##### `resetMetastoreServiceConfig` <a name="resetMetastoreServiceConfig" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.resetMetastoreServiceConfig"></a>

```typescript
public resetMetastoreServiceConfig(): void
```

##### `resetSparkHistoryServerConfig` <a name="resetSparkHistoryServerConfig" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.resetSparkHistoryServerConfig"></a>

```typescript
public resetSparkHistoryServerConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.metastoreServiceConfig">metastoreServiceConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference">GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.serviceAccountId">serviceAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.sparkHistoryServerConfig">sparkHistoryServerConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference">GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.metastoreServiceConfigInput">metastoreServiceConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfig">GoogleBigqueryConnectionSparkMetastoreServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.sparkHistoryServerConfigInput">sparkHistoryServerConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfig">GoogleBigqueryConnectionSparkSparkHistoryServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSpark">GoogleBigqueryConnectionSpark</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metastoreServiceConfig`<sup>Required</sup> <a name="metastoreServiceConfig" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.metastoreServiceConfig"></a>

```typescript
public readonly metastoreServiceConfig: GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference">GoogleBigqueryConnectionSparkMetastoreServiceConfigOutputReference</a>

---

##### `serviceAccountId`<sup>Required</sup> <a name="serviceAccountId" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.serviceAccountId"></a>

```typescript
public readonly serviceAccountId: string;
```

- *Type:* string

---

##### `sparkHistoryServerConfig`<sup>Required</sup> <a name="sparkHistoryServerConfig" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.sparkHistoryServerConfig"></a>

```typescript
public readonly sparkHistoryServerConfig: GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference">GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference</a>

---

##### `metastoreServiceConfigInput`<sup>Optional</sup> <a name="metastoreServiceConfigInput" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.metastoreServiceConfigInput"></a>

```typescript
public readonly metastoreServiceConfigInput: GoogleBigqueryConnectionSparkMetastoreServiceConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkMetastoreServiceConfig">GoogleBigqueryConnectionSparkMetastoreServiceConfig</a>

---

##### `sparkHistoryServerConfigInput`<sup>Optional</sup> <a name="sparkHistoryServerConfigInput" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.sparkHistoryServerConfigInput"></a>

```typescript
public readonly sparkHistoryServerConfigInput: GoogleBigqueryConnectionSparkSparkHistoryServerConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfig">GoogleBigqueryConnectionSparkSparkHistoryServerConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBigqueryConnectionSpark;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSpark">GoogleBigqueryConnectionSpark</a>

---


### GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference <a name="GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktn/provider-google-beta'

new googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.resetDataprocCluster">resetDataprocCluster</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataprocCluster` <a name="resetDataprocCluster" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.resetDataprocCluster"></a>

```typescript
public resetDataprocCluster(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.dataprocClusterInput">dataprocClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.dataprocCluster">dataprocCluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfig">GoogleBigqueryConnectionSparkSparkHistoryServerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataprocClusterInput`<sup>Optional</sup> <a name="dataprocClusterInput" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.dataprocClusterInput"></a>

```typescript
public readonly dataprocClusterInput: string;
```

- *Type:* string

---

##### `dataprocCluster`<sup>Required</sup> <a name="dataprocCluster" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.dataprocCluster"></a>

```typescript
public readonly dataprocCluster: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBigqueryConnectionSparkSparkHistoryServerConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionSparkSparkHistoryServerConfig">GoogleBigqueryConnectionSparkSparkHistoryServerConfig</a>

---


### GoogleBigqueryConnectionTimeoutsOutputReference <a name="GoogleBigqueryConnectionTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleBigqueryConnection } from '@cdktn/provider-google-beta'

new googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts">GoogleBigqueryConnectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleBigqueryConnectionTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBigqueryConnection.GoogleBigqueryConnectionTimeouts">GoogleBigqueryConnectionTimeouts</a>

---



