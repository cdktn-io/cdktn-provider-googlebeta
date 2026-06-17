# `googleComputeBackendBucket` Submodule <a name="`googleComputeBackendBucket` Submodule" id="@cdktn/provider-google-beta.googleComputeBackendBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeBackendBucket <a name="GoogleComputeBackendBucket" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_backend_bucket google_compute_backend_bucket}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.Initializer"></a>

```typescript
import { googleComputeBackendBucket } from '@cdktn/provider-google-beta'

new googleComputeBackendBucket.GoogleComputeBackendBucket(scope: Construct, id: string, config: GoogleComputeBackendBucketConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig">GoogleComputeBackendBucketConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig">GoogleComputeBackendBucketConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.putCdnPolicy">putCdnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.putParams">putParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.resetCdnPolicy">resetCdnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.resetCompressionMode">resetCompressionMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.resetCustomResponseHeaders">resetCustomResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.resetEdgeSecurityPolicy">resetEdgeSecurityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.resetEnableCdn">resetEnableCdn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.resetLoadBalancingScheme">resetLoadBalancingScheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.resetParams">resetParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCdnPolicy` <a name="putCdnPolicy" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.putCdnPolicy"></a>

```typescript
public putCdnPolicy(value: GoogleComputeBackendBucketCdnPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.putCdnPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy">GoogleComputeBackendBucketCdnPolicy</a>

---

##### `putParams` <a name="putParams" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.putParams"></a>

```typescript
public putParams(value: GoogleComputeBackendBucketParams): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.putParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParams">GoogleComputeBackendBucketParams</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleComputeBackendBucketTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeouts">GoogleComputeBackendBucketTimeouts</a>

---

##### `resetCdnPolicy` <a name="resetCdnPolicy" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.resetCdnPolicy"></a>

```typescript
public resetCdnPolicy(): void
```

##### `resetCompressionMode` <a name="resetCompressionMode" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.resetCompressionMode"></a>

```typescript
public resetCompressionMode(): void
```

##### `resetCustomResponseHeaders` <a name="resetCustomResponseHeaders" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.resetCustomResponseHeaders"></a>

```typescript
public resetCustomResponseHeaders(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEdgeSecurityPolicy` <a name="resetEdgeSecurityPolicy" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.resetEdgeSecurityPolicy"></a>

```typescript
public resetEdgeSecurityPolicy(): void
```

##### `resetEnableCdn` <a name="resetEnableCdn" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.resetEnableCdn"></a>

```typescript
public resetEnableCdn(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLoadBalancingScheme` <a name="resetLoadBalancingScheme" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.resetLoadBalancingScheme"></a>

```typescript
public resetLoadBalancingScheme(): void
```

##### `resetParams` <a name="resetParams" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.resetParams"></a>

```typescript
public resetParams(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleComputeBackendBucket resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.isConstruct"></a>

```typescript
import { googleComputeBackendBucket } from '@cdktn/provider-google-beta'

googleComputeBackendBucket.GoogleComputeBackendBucket.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.isTerraformElement"></a>

```typescript
import { googleComputeBackendBucket } from '@cdktn/provider-google-beta'

googleComputeBackendBucket.GoogleComputeBackendBucket.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.isTerraformResource"></a>

```typescript
import { googleComputeBackendBucket } from '@cdktn/provider-google-beta'

googleComputeBackendBucket.GoogleComputeBackendBucket.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.generateConfigForImport"></a>

```typescript
import { googleComputeBackendBucket } from '@cdktn/provider-google-beta'

googleComputeBackendBucket.GoogleComputeBackendBucket.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleComputeBackendBucket resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeBackendBucket to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeBackendBucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_backend_bucket#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputeBackendBucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.cdnPolicy">cdnPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference">GoogleComputeBackendBucketCdnPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.params">params</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference">GoogleComputeBackendBucketParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference">GoogleComputeBackendBucketTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.cdnPolicyInput">cdnPolicyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy">GoogleComputeBackendBucketCdnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.compressionModeInput">compressionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.customResponseHeadersInput">customResponseHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.edgeSecurityPolicyInput">edgeSecurityPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.enableCdnInput">enableCdnInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.loadBalancingSchemeInput">loadBalancingSchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.paramsInput">paramsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParams">GoogleComputeBackendBucketParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeouts">GoogleComputeBackendBucketTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.compressionMode">compressionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.customResponseHeaders">customResponseHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.edgeSecurityPolicy">edgeSecurityPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.enableCdn">enableCdn</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.loadBalancingScheme">loadBalancingScheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `cdnPolicy`<sup>Required</sup> <a name="cdnPolicy" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.cdnPolicy"></a>

```typescript
public readonly cdnPolicy: GoogleComputeBackendBucketCdnPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference">GoogleComputeBackendBucketCdnPolicyOutputReference</a>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.params"></a>

```typescript
public readonly params: GoogleComputeBackendBucketParamsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference">GoogleComputeBackendBucketParamsOutputReference</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeBackendBucketTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference">GoogleComputeBackendBucketTimeoutsOutputReference</a>

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `cdnPolicyInput`<sup>Optional</sup> <a name="cdnPolicyInput" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.cdnPolicyInput"></a>

```typescript
public readonly cdnPolicyInput: GoogleComputeBackendBucketCdnPolicy;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy">GoogleComputeBackendBucketCdnPolicy</a>

---

##### `compressionModeInput`<sup>Optional</sup> <a name="compressionModeInput" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.compressionModeInput"></a>

```typescript
public readonly compressionModeInput: string;
```

- *Type:* string

---

##### `customResponseHeadersInput`<sup>Optional</sup> <a name="customResponseHeadersInput" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.customResponseHeadersInput"></a>

```typescript
public readonly customResponseHeadersInput: string[];
```

- *Type:* string[]

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `edgeSecurityPolicyInput`<sup>Optional</sup> <a name="edgeSecurityPolicyInput" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.edgeSecurityPolicyInput"></a>

```typescript
public readonly edgeSecurityPolicyInput: string;
```

- *Type:* string

---

##### `enableCdnInput`<sup>Optional</sup> <a name="enableCdnInput" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.enableCdnInput"></a>

```typescript
public readonly enableCdnInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `loadBalancingSchemeInput`<sup>Optional</sup> <a name="loadBalancingSchemeInput" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.loadBalancingSchemeInput"></a>

```typescript
public readonly loadBalancingSchemeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `paramsInput`<sup>Optional</sup> <a name="paramsInput" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.paramsInput"></a>

```typescript
public readonly paramsInput: GoogleComputeBackendBucketParams;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParams">GoogleComputeBackendBucketParams</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleComputeBackendBucketTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeouts">GoogleComputeBackendBucketTimeouts</a>

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `compressionMode`<sup>Required</sup> <a name="compressionMode" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.compressionMode"></a>

```typescript
public readonly compressionMode: string;
```

- *Type:* string

---

##### `customResponseHeaders`<sup>Required</sup> <a name="customResponseHeaders" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.customResponseHeaders"></a>

```typescript
public readonly customResponseHeaders: string[];
```

- *Type:* string[]

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `edgeSecurityPolicy`<sup>Required</sup> <a name="edgeSecurityPolicy" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.edgeSecurityPolicy"></a>

```typescript
public readonly edgeSecurityPolicy: string;
```

- *Type:* string

---

##### `enableCdn`<sup>Required</sup> <a name="enableCdn" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.enableCdn"></a>

```typescript
public readonly enableCdn: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `loadBalancingScheme`<sup>Required</sup> <a name="loadBalancingScheme" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.loadBalancingScheme"></a>

```typescript
public readonly loadBalancingScheme: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucket.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeBackendBucketCdnPolicy <a name="GoogleComputeBackendBucketCdnPolicy" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy.Initializer"></a>

```typescript
import { googleComputeBackendBucket } from '@cdktn/provider-google-beta'

const googleComputeBackendBucketCdnPolicy: googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy.property.bypassCacheOnRequestHeaders">bypassCacheOnRequestHeaders</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders">GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders</a>[]</code> | bypass_cache_on_request_headers block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy.property.cacheKeyPolicy">cacheKeyPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicy">GoogleComputeBackendBucketCdnPolicyCacheKeyPolicy</a></code> | cache_key_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy.property.cacheMode">cacheMode</a></code> | <code>string</code> | Specifies the cache setting for all responses from this backend. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy.property.clientTtl">clientTtl</a></code> | <code>number</code> | Specifies the maximum allowed TTL for cached content served by this origin. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy.property.defaultTtl">defaultTtl</a></code> | <code>number</code> | Specifies the default TTL for cached content served by this origin for responses that do not have an existing valid TTL (max-age or s-max-age). |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy.property.maxTtl">maxTtl</a></code> | <code>number</code> | Specifies the maximum allowed TTL for cached content served by this origin. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy.property.negativeCaching">negativeCaching</a></code> | <code>boolean \| cdktn.IResolvable</code> | Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy.property.negativeCachingPolicy">negativeCachingPolicy</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy">GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy</a>[]</code> | negative_caching_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy.property.requestCoalescing">requestCoalescing</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true then Cloud CDN will combine multiple concurrent cache fill requests into a small number of requests to the origin. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy.property.serveWhileStale">serveWhileStale</a></code> | <code>number</code> | Serve existing content from the cache (if available) when revalidating content with the origin, or when an error is encountered when refreshing the cache. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy.property.signedUrlCacheMaxAgeSec">signedUrlCacheMaxAgeSec</a></code> | <code>number</code> | Maximum number of seconds the response to a signed URL request will be considered fresh. |

---

##### `bypassCacheOnRequestHeaders`<sup>Optional</sup> <a name="bypassCacheOnRequestHeaders" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy.property.bypassCacheOnRequestHeaders"></a>

```typescript
public readonly bypassCacheOnRequestHeaders: IResolvable | GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders">GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders</a>[]

bypass_cache_on_request_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_backend_bucket#bypass_cache_on_request_headers GoogleComputeBackendBucket#bypass_cache_on_request_headers}

---

##### `cacheKeyPolicy`<sup>Optional</sup> <a name="cacheKeyPolicy" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy.property.cacheKeyPolicy"></a>

```typescript
public readonly cacheKeyPolicy: GoogleComputeBackendBucketCdnPolicyCacheKeyPolicy;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicy">GoogleComputeBackendBucketCdnPolicyCacheKeyPolicy</a>

cache_key_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_backend_bucket#cache_key_policy GoogleComputeBackendBucket#cache_key_policy}

---

##### `cacheMode`<sup>Optional</sup> <a name="cacheMode" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy.property.cacheMode"></a>

```typescript
public readonly cacheMode: string;
```

- *Type:* string

Specifies the cache setting for all responses from this backend.

The possible values are: USE_ORIGIN_HEADERS, FORCE_CACHE_ALL and CACHE_ALL_STATIC Possible values: ["USE_ORIGIN_HEADERS", "FORCE_CACHE_ALL", "CACHE_ALL_STATIC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_backend_bucket#cache_mode GoogleComputeBackendBucket#cache_mode}

---

##### `clientTtl`<sup>Optional</sup> <a name="clientTtl" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy.property.clientTtl"></a>

```typescript
public readonly clientTtl: number;
```

- *Type:* number

Specifies the maximum allowed TTL for cached content served by this origin.

When the
'cache_mode' is set to "USE_ORIGIN_HEADERS", you must omit this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_backend_bucket#client_ttl GoogleComputeBackendBucket#client_ttl}

---

##### `defaultTtl`<sup>Optional</sup> <a name="defaultTtl" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy.property.defaultTtl"></a>

```typescript
public readonly defaultTtl: number;
```

- *Type:* number

Specifies the default TTL for cached content served by this origin for responses that do not have an existing valid TTL (max-age or s-max-age).

When the 'cache_mode'
is set to "USE_ORIGIN_HEADERS", you must omit this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_backend_bucket#default_ttl GoogleComputeBackendBucket#default_ttl}

---

##### `maxTtl`<sup>Optional</sup> <a name="maxTtl" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy.property.maxTtl"></a>

```typescript
public readonly maxTtl: number;
```

- *Type:* number

Specifies the maximum allowed TTL for cached content served by this origin.

When the
'cache_mode' is set to "USE_ORIGIN_HEADERS", you must omit this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_backend_bucket#max_ttl GoogleComputeBackendBucket#max_ttl}

---

##### `negativeCaching`<sup>Optional</sup> <a name="negativeCaching" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy.property.negativeCaching"></a>

```typescript
public readonly negativeCaching: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_backend_bucket#negative_caching GoogleComputeBackendBucket#negative_caching}

---

##### `negativeCachingPolicy`<sup>Optional</sup> <a name="negativeCachingPolicy" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy.property.negativeCachingPolicy"></a>

```typescript
public readonly negativeCachingPolicy: IResolvable | GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy">GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy</a>[]

negative_caching_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_backend_bucket#negative_caching_policy GoogleComputeBackendBucket#negative_caching_policy}

---

##### `requestCoalescing`<sup>Optional</sup> <a name="requestCoalescing" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy.property.requestCoalescing"></a>

```typescript
public readonly requestCoalescing: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true then Cloud CDN will combine multiple concurrent cache fill requests into a small number of requests to the origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_backend_bucket#request_coalescing GoogleComputeBackendBucket#request_coalescing}

---

##### `serveWhileStale`<sup>Optional</sup> <a name="serveWhileStale" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy.property.serveWhileStale"></a>

```typescript
public readonly serveWhileStale: number;
```

- *Type:* number

Serve existing content from the cache (if available) when revalidating content with the origin, or when an error is encountered when refreshing the cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_backend_bucket#serve_while_stale GoogleComputeBackendBucket#serve_while_stale}

---

##### `signedUrlCacheMaxAgeSec`<sup>Optional</sup> <a name="signedUrlCacheMaxAgeSec" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy.property.signedUrlCacheMaxAgeSec"></a>

```typescript
public readonly signedUrlCacheMaxAgeSec: number;
```

- *Type:* number

Maximum number of seconds the response to a signed URL request will be considered fresh.

After this time period,
the response will be revalidated before being served.
When serving responses to signed URL requests,
Cloud CDN will internally behave as though
all responses from this backend had a "Cache-Control: public,
max-age=[TTL]" header, regardless of any existing Cache-Control
header. The actual headers served in responses will not be altered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_backend_bucket#signed_url_cache_max_age_sec GoogleComputeBackendBucket#signed_url_cache_max_age_sec}

---

### GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders <a name="GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders.Initializer"></a>

```typescript
import { googleComputeBackendBucket } from '@cdktn/provider-google-beta'

const googleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders: googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders.property.headerName">headerName</a></code> | <code>string</code> | The header field name to match on when bypassing cache. Values are case-insensitive. |

---

##### `headerName`<sup>Optional</sup> <a name="headerName" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders.property.headerName"></a>

```typescript
public readonly headerName: string;
```

- *Type:* string

The header field name to match on when bypassing cache. Values are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_backend_bucket#header_name GoogleComputeBackendBucket#header_name}

---

### GoogleComputeBackendBucketCdnPolicyCacheKeyPolicy <a name="GoogleComputeBackendBucketCdnPolicyCacheKeyPolicy" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicy.Initializer"></a>

```typescript
import { googleComputeBackendBucket } from '@cdktn/provider-google-beta'

const googleComputeBackendBucketCdnPolicyCacheKeyPolicy: googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicy.property.includeHttpHeaders">includeHttpHeaders</a></code> | <code>string[]</code> | Allows HTTP request headers (by name) to be used in the cache key. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicy.property.queryStringWhitelist">queryStringWhitelist</a></code> | <code>string[]</code> | Names of query string parameters to include in cache keys. |

---

##### `includeHttpHeaders`<sup>Optional</sup> <a name="includeHttpHeaders" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicy.property.includeHttpHeaders"></a>

```typescript
public readonly includeHttpHeaders: string[];
```

- *Type:* string[]

Allows HTTP request headers (by name) to be used in the cache key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_backend_bucket#include_http_headers GoogleComputeBackendBucket#include_http_headers}

---

##### `queryStringWhitelist`<sup>Optional</sup> <a name="queryStringWhitelist" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicy.property.queryStringWhitelist"></a>

```typescript
public readonly queryStringWhitelist: string[];
```

- *Type:* string[]

Names of query string parameters to include in cache keys.

Default parameters are always included. '&' and '=' will
be percent encoded and not treated as delimiters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_backend_bucket#query_string_whitelist GoogleComputeBackendBucket#query_string_whitelist}

---

### GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy <a name="GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy.Initializer"></a>

```typescript
import { googleComputeBackendBucket } from '@cdktn/provider-google-beta'

const googleComputeBackendBucketCdnPolicyNegativeCachingPolicy: googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy.property.code">code</a></code> | <code>number</code> | The HTTP status code to define a TTL against. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy.property.ttl">ttl</a></code> | <code>number</code> | The TTL (in seconds) for which to cache responses with the corresponding status code. |

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

The HTTP status code to define a TTL against.

Only HTTP status codes 300, 301, 308, 404, 405, 410, 421, 451 and 501
can be specified as values, and you cannot specify a status code more than once.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_backend_bucket#code GoogleComputeBackendBucket#code}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

The TTL (in seconds) for which to cache responses with the corresponding status code.

The maximum allowed value is 1800s
(30 minutes), noting that infrequently accessed objects may be evicted from the cache before the defined TTL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_backend_bucket#ttl GoogleComputeBackendBucket#ttl}

---

### GoogleComputeBackendBucketConfig <a name="GoogleComputeBackendBucketConfig" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.Initializer"></a>

```typescript
import { googleComputeBackendBucket } from '@cdktn/provider-google-beta'

const googleComputeBackendBucketConfig: googleComputeBackendBucket.GoogleComputeBackendBucketConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.bucketName">bucketName</a></code> | <code>string</code> | Cloud Storage bucket name. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.name">name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.cdnPolicy">cdnPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy">GoogleComputeBackendBucketCdnPolicy</a></code> | cdn_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.compressionMode">compressionMode</a></code> | <code>string</code> | Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header. Possible values: ["AUTOMATIC", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.customResponseHeaders">customResponseHeaders</a></code> | <code>string[]</code> | Headers that the HTTP/S load balancer should add to proxied responses. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.description">description</a></code> | <code>string</code> | An optional textual description of the resource; provided by the client when the resource is created. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.edgeSecurityPolicy">edgeSecurityPolicy</a></code> | <code>string</code> | The security policy associated with this backend bucket. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.enableCdn">enableCdn</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, enable Cloud CDN for this BackendBucket. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_backend_bucket#id GoogleComputeBackendBucket#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.loadBalancingScheme">loadBalancingScheme</a></code> | <code>string</code> | The value can only be INTERNAL_MANAGED for cross-region internal layer 7 load balancer. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.params">params</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParams">GoogleComputeBackendBucketParams</a></code> | params block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_backend_bucket#project GoogleComputeBackendBucket#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeouts">GoogleComputeBackendBucketTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

Cloud Storage bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_backend_bucket#bucket_name GoogleComputeBackendBucket#bucket_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_backend_bucket#name GoogleComputeBackendBucket#name}

---

##### `cdnPolicy`<sup>Optional</sup> <a name="cdnPolicy" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.cdnPolicy"></a>

```typescript
public readonly cdnPolicy: GoogleComputeBackendBucketCdnPolicy;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy">GoogleComputeBackendBucketCdnPolicy</a>

cdn_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_backend_bucket#cdn_policy GoogleComputeBackendBucket#cdn_policy}

---

##### `compressionMode`<sup>Optional</sup> <a name="compressionMode" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.compressionMode"></a>

```typescript
public readonly compressionMode: string;
```

- *Type:* string

Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header. Possible values: ["AUTOMATIC", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_backend_bucket#compression_mode GoogleComputeBackendBucket#compression_mode}

---

##### `customResponseHeaders`<sup>Optional</sup> <a name="customResponseHeaders" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.customResponseHeaders"></a>

```typescript
public readonly customResponseHeaders: string[];
```

- *Type:* string[]

Headers that the HTTP/S load balancer should add to proxied responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_backend_bucket#custom_response_headers GoogleComputeBackendBucket#custom_response_headers}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_backend_bucket#deletion_policy GoogleComputeBackendBucket#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional textual description of the resource; provided by the client when the resource is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_backend_bucket#description GoogleComputeBackendBucket#description}

---

##### `edgeSecurityPolicy`<sup>Optional</sup> <a name="edgeSecurityPolicy" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.edgeSecurityPolicy"></a>

```typescript
public readonly edgeSecurityPolicy: string;
```

- *Type:* string

The security policy associated with this backend bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_backend_bucket#edge_security_policy GoogleComputeBackendBucket#edge_security_policy}

---

##### `enableCdn`<sup>Optional</sup> <a name="enableCdn" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.enableCdn"></a>

```typescript
public readonly enableCdn: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, enable Cloud CDN for this BackendBucket.

Note: This cannot be set to true when loadBalancingScheme is set to INTERNAL_MANAGED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_backend_bucket#enable_cdn GoogleComputeBackendBucket#enable_cdn}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_backend_bucket#id GoogleComputeBackendBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loadBalancingScheme`<sup>Optional</sup> <a name="loadBalancingScheme" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.loadBalancingScheme"></a>

```typescript
public readonly loadBalancingScheme: string;
```

- *Type:* string

The value can only be INTERNAL_MANAGED for cross-region internal layer 7 load balancer.

If loadBalancingScheme is not specified, the backend bucket can be used by classic global external load balancers, or global application external load balancers, or both.
Important: CDN cannot be enabled (enableCdn cannot be set to true) when loadBalancingScheme is set to INTERNAL_MANAGED. Possible values: ["INTERNAL_MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_backend_bucket#load_balancing_scheme GoogleComputeBackendBucket#load_balancing_scheme}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.params"></a>

```typescript
public readonly params: GoogleComputeBackendBucketParams;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParams">GoogleComputeBackendBucketParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_backend_bucket#params GoogleComputeBackendBucket#params}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_backend_bucket#project GoogleComputeBackendBucket#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeBackendBucketTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeouts">GoogleComputeBackendBucketTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_backend_bucket#timeouts GoogleComputeBackendBucket#timeouts}

---

### GoogleComputeBackendBucketParams <a name="GoogleComputeBackendBucketParams" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParams.Initializer"></a>

```typescript
import { googleComputeBackendBucket } from '@cdktn/provider-google-beta'

const googleComputeBackendBucketParams: googleComputeBackendBucket.GoogleComputeBackendBucketParams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParams.property.resourceManagerTags">resourceManagerTags</a></code> | <code>{[ key: string ]: string}</code> | Resource manager tags to be bound to the backend bucket. |

---

##### `resourceManagerTags`<sup>Optional</sup> <a name="resourceManagerTags" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParams.property.resourceManagerTags"></a>

```typescript
public readonly resourceManagerTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Resource manager tags to be bound to the backend bucket.

Tag keys and values have the
same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id},
and values are in the format tagValues/456.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_backend_bucket#resource_manager_tags GoogleComputeBackendBucket#resource_manager_tags}

---

### GoogleComputeBackendBucketTimeouts <a name="GoogleComputeBackendBucketTimeouts" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeouts.Initializer"></a>

```typescript
import { googleComputeBackendBucket } from '@cdktn/provider-google-beta'

const googleComputeBackendBucketTimeouts: googleComputeBackendBucket.GoogleComputeBackendBucketTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_backend_bucket#create GoogleComputeBackendBucket#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_backend_bucket#delete GoogleComputeBackendBucket#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_backend_bucket#update GoogleComputeBackendBucket#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_backend_bucket#create GoogleComputeBackendBucket#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_backend_bucket#delete GoogleComputeBackendBucket#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_compute_backend_bucket#update GoogleComputeBackendBucket#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList <a name="GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.Initializer"></a>

```typescript
import { googleComputeBackendBucket } from '@cdktn/provider-google-beta'

new googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.get"></a>

```typescript
public get(index: number): GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders">GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders">GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders</a>[]

---


### GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference <a name="GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer"></a>

```typescript
import { googleComputeBackendBucket } from '@cdktn/provider-google-beta'

new googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.resetHeaderName">resetHeaderName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHeaderName` <a name="resetHeaderName" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.resetHeaderName"></a>

```typescript
public resetHeaderName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.headerNameInput">headerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.headerName">headerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders">GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headerNameInput`<sup>Optional</sup> <a name="headerNameInput" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.headerNameInput"></a>

```typescript
public readonly headerNameInput: string;
```

- *Type:* string

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.headerName"></a>

```typescript
public readonly headerName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders">GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders</a>

---


### GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference <a name="GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.Initializer"></a>

```typescript
import { googleComputeBackendBucket } from '@cdktn/provider-google-beta'

new googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.resetIncludeHttpHeaders">resetIncludeHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.resetQueryStringWhitelist">resetQueryStringWhitelist</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeHttpHeaders` <a name="resetIncludeHttpHeaders" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.resetIncludeHttpHeaders"></a>

```typescript
public resetIncludeHttpHeaders(): void
```

##### `resetQueryStringWhitelist` <a name="resetQueryStringWhitelist" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.resetQueryStringWhitelist"></a>

```typescript
public resetQueryStringWhitelist(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.includeHttpHeadersInput">includeHttpHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelistInput">queryStringWhitelistInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.includeHttpHeaders">includeHttpHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelist">queryStringWhitelist</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicy">GoogleComputeBackendBucketCdnPolicyCacheKeyPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includeHttpHeadersInput`<sup>Optional</sup> <a name="includeHttpHeadersInput" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.includeHttpHeadersInput"></a>

```typescript
public readonly includeHttpHeadersInput: string[];
```

- *Type:* string[]

---

##### `queryStringWhitelistInput`<sup>Optional</sup> <a name="queryStringWhitelistInput" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelistInput"></a>

```typescript
public readonly queryStringWhitelistInput: string[];
```

- *Type:* string[]

---

##### `includeHttpHeaders`<sup>Required</sup> <a name="includeHttpHeaders" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.includeHttpHeaders"></a>

```typescript
public readonly includeHttpHeaders: string[];
```

- *Type:* string[]

---

##### `queryStringWhitelist`<sup>Required</sup> <a name="queryStringWhitelist" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelist"></a>

```typescript
public readonly queryStringWhitelist: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeBackendBucketCdnPolicyCacheKeyPolicy;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicy">GoogleComputeBackendBucketCdnPolicyCacheKeyPolicy</a>

---


### GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList <a name="GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList.Initializer"></a>

```typescript
import { googleComputeBackendBucket } from '@cdktn/provider-google-beta'

new googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList.get"></a>

```typescript
public get(index: number): GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy">GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy">GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy</a>[]

---


### GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference <a name="GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.Initializer"></a>

```typescript
import { googleComputeBackendBucket } from '@cdktn/provider-google-beta'

new googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.resetCode">resetCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCode` <a name="resetCode" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.resetCode"></a>

```typescript
public resetCode(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.resetTtl"></a>

```typescript
public resetTtl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.codeInput">codeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.ttlInput">ttlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy">GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `codeInput`<sup>Optional</sup> <a name="codeInput" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.codeInput"></a>

```typescript
public readonly codeInput: number;
```

- *Type:* number

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.ttlInput"></a>

```typescript
public readonly ttlInput: number;
```

- *Type:* number

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy">GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy</a>

---


### GoogleComputeBackendBucketCdnPolicyOutputReference <a name="GoogleComputeBackendBucketCdnPolicyOutputReference" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.Initializer"></a>

```typescript
import { googleComputeBackendBucket } from '@cdktn/provider-google-beta'

new googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.putBypassCacheOnRequestHeaders">putBypassCacheOnRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.putCacheKeyPolicy">putCacheKeyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.putNegativeCachingPolicy">putNegativeCachingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.resetBypassCacheOnRequestHeaders">resetBypassCacheOnRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.resetCacheKeyPolicy">resetCacheKeyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.resetCacheMode">resetCacheMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.resetClientTtl">resetClientTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.resetDefaultTtl">resetDefaultTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.resetMaxTtl">resetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.resetNegativeCaching">resetNegativeCaching</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.resetNegativeCachingPolicy">resetNegativeCachingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.resetRequestCoalescing">resetRequestCoalescing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.resetServeWhileStale">resetServeWhileStale</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.resetSignedUrlCacheMaxAgeSec">resetSignedUrlCacheMaxAgeSec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBypassCacheOnRequestHeaders` <a name="putBypassCacheOnRequestHeaders" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.putBypassCacheOnRequestHeaders"></a>

```typescript
public putBypassCacheOnRequestHeaders(value: IResolvable | GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.putBypassCacheOnRequestHeaders.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders">GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders</a>[]

---

##### `putCacheKeyPolicy` <a name="putCacheKeyPolicy" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.putCacheKeyPolicy"></a>

```typescript
public putCacheKeyPolicy(value: GoogleComputeBackendBucketCdnPolicyCacheKeyPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.putCacheKeyPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicy">GoogleComputeBackendBucketCdnPolicyCacheKeyPolicy</a>

---

##### `putNegativeCachingPolicy` <a name="putNegativeCachingPolicy" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.putNegativeCachingPolicy"></a>

```typescript
public putNegativeCachingPolicy(value: IResolvable | GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.putNegativeCachingPolicy.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy">GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy</a>[]

---

##### `resetBypassCacheOnRequestHeaders` <a name="resetBypassCacheOnRequestHeaders" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.resetBypassCacheOnRequestHeaders"></a>

```typescript
public resetBypassCacheOnRequestHeaders(): void
```

##### `resetCacheKeyPolicy` <a name="resetCacheKeyPolicy" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.resetCacheKeyPolicy"></a>

```typescript
public resetCacheKeyPolicy(): void
```

##### `resetCacheMode` <a name="resetCacheMode" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.resetCacheMode"></a>

```typescript
public resetCacheMode(): void
```

##### `resetClientTtl` <a name="resetClientTtl" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.resetClientTtl"></a>

```typescript
public resetClientTtl(): void
```

##### `resetDefaultTtl` <a name="resetDefaultTtl" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.resetDefaultTtl"></a>

```typescript
public resetDefaultTtl(): void
```

##### `resetMaxTtl` <a name="resetMaxTtl" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.resetMaxTtl"></a>

```typescript
public resetMaxTtl(): void
```

##### `resetNegativeCaching` <a name="resetNegativeCaching" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.resetNegativeCaching"></a>

```typescript
public resetNegativeCaching(): void
```

##### `resetNegativeCachingPolicy` <a name="resetNegativeCachingPolicy" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.resetNegativeCachingPolicy"></a>

```typescript
public resetNegativeCachingPolicy(): void
```

##### `resetRequestCoalescing` <a name="resetRequestCoalescing" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.resetRequestCoalescing"></a>

```typescript
public resetRequestCoalescing(): void
```

##### `resetServeWhileStale` <a name="resetServeWhileStale" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.resetServeWhileStale"></a>

```typescript
public resetServeWhileStale(): void
```

##### `resetSignedUrlCacheMaxAgeSec` <a name="resetSignedUrlCacheMaxAgeSec" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.resetSignedUrlCacheMaxAgeSec"></a>

```typescript
public resetSignedUrlCacheMaxAgeSec(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.bypassCacheOnRequestHeaders">bypassCacheOnRequestHeaders</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList">GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.cacheKeyPolicy">cacheKeyPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference">GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.negativeCachingPolicy">negativeCachingPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList">GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.bypassCacheOnRequestHeadersInput">bypassCacheOnRequestHeadersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders">GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.cacheKeyPolicyInput">cacheKeyPolicyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicy">GoogleComputeBackendBucketCdnPolicyCacheKeyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.cacheModeInput">cacheModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.clientTtlInput">clientTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.defaultTtlInput">defaultTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.maxTtlInput">maxTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.negativeCachingInput">negativeCachingInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.negativeCachingPolicyInput">negativeCachingPolicyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy">GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.requestCoalescingInput">requestCoalescingInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.serveWhileStaleInput">serveWhileStaleInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSecInput">signedUrlCacheMaxAgeSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.cacheMode">cacheMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.clientTtl">clientTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.defaultTtl">defaultTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.maxTtl">maxTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.negativeCaching">negativeCaching</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.requestCoalescing">requestCoalescing</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.serveWhileStale">serveWhileStale</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSec">signedUrlCacheMaxAgeSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy">GoogleComputeBackendBucketCdnPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bypassCacheOnRequestHeaders`<sup>Required</sup> <a name="bypassCacheOnRequestHeaders" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.bypassCacheOnRequestHeaders"></a>

```typescript
public readonly bypassCacheOnRequestHeaders: GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList">GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList</a>

---

##### `cacheKeyPolicy`<sup>Required</sup> <a name="cacheKeyPolicy" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.cacheKeyPolicy"></a>

```typescript
public readonly cacheKeyPolicy: GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference">GoogleComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference</a>

---

##### `negativeCachingPolicy`<sup>Required</sup> <a name="negativeCachingPolicy" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.negativeCachingPolicy"></a>

```typescript
public readonly negativeCachingPolicy: GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList">GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicyList</a>

---

##### `bypassCacheOnRequestHeadersInput`<sup>Optional</sup> <a name="bypassCacheOnRequestHeadersInput" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.bypassCacheOnRequestHeadersInput"></a>

```typescript
public readonly bypassCacheOnRequestHeadersInput: IResolvable | GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders">GoogleComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders</a>[]

---

##### `cacheKeyPolicyInput`<sup>Optional</sup> <a name="cacheKeyPolicyInput" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.cacheKeyPolicyInput"></a>

```typescript
public readonly cacheKeyPolicyInput: GoogleComputeBackendBucketCdnPolicyCacheKeyPolicy;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyCacheKeyPolicy">GoogleComputeBackendBucketCdnPolicyCacheKeyPolicy</a>

---

##### `cacheModeInput`<sup>Optional</sup> <a name="cacheModeInput" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.cacheModeInput"></a>

```typescript
public readonly cacheModeInput: string;
```

- *Type:* string

---

##### `clientTtlInput`<sup>Optional</sup> <a name="clientTtlInput" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.clientTtlInput"></a>

```typescript
public readonly clientTtlInput: number;
```

- *Type:* number

---

##### `defaultTtlInput`<sup>Optional</sup> <a name="defaultTtlInput" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.defaultTtlInput"></a>

```typescript
public readonly defaultTtlInput: number;
```

- *Type:* number

---

##### `maxTtlInput`<sup>Optional</sup> <a name="maxTtlInput" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.maxTtlInput"></a>

```typescript
public readonly maxTtlInput: number;
```

- *Type:* number

---

##### `negativeCachingInput`<sup>Optional</sup> <a name="negativeCachingInput" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.negativeCachingInput"></a>

```typescript
public readonly negativeCachingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `negativeCachingPolicyInput`<sup>Optional</sup> <a name="negativeCachingPolicyInput" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.negativeCachingPolicyInput"></a>

```typescript
public readonly negativeCachingPolicyInput: IResolvable | GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy">GoogleComputeBackendBucketCdnPolicyNegativeCachingPolicy</a>[]

---

##### `requestCoalescingInput`<sup>Optional</sup> <a name="requestCoalescingInput" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.requestCoalescingInput"></a>

```typescript
public readonly requestCoalescingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `serveWhileStaleInput`<sup>Optional</sup> <a name="serveWhileStaleInput" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.serveWhileStaleInput"></a>

```typescript
public readonly serveWhileStaleInput: number;
```

- *Type:* number

---

##### `signedUrlCacheMaxAgeSecInput`<sup>Optional</sup> <a name="signedUrlCacheMaxAgeSecInput" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSecInput"></a>

```typescript
public readonly signedUrlCacheMaxAgeSecInput: number;
```

- *Type:* number

---

##### `cacheMode`<sup>Required</sup> <a name="cacheMode" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.cacheMode"></a>

```typescript
public readonly cacheMode: string;
```

- *Type:* string

---

##### `clientTtl`<sup>Required</sup> <a name="clientTtl" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.clientTtl"></a>

```typescript
public readonly clientTtl: number;
```

- *Type:* number

---

##### `defaultTtl`<sup>Required</sup> <a name="defaultTtl" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.defaultTtl"></a>

```typescript
public readonly defaultTtl: number;
```

- *Type:* number

---

##### `maxTtl`<sup>Required</sup> <a name="maxTtl" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.maxTtl"></a>

```typescript
public readonly maxTtl: number;
```

- *Type:* number

---

##### `negativeCaching`<sup>Required</sup> <a name="negativeCaching" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.negativeCaching"></a>

```typescript
public readonly negativeCaching: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `requestCoalescing`<sup>Required</sup> <a name="requestCoalescing" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.requestCoalescing"></a>

```typescript
public readonly requestCoalescing: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `serveWhileStale`<sup>Required</sup> <a name="serveWhileStale" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.serveWhileStale"></a>

```typescript
public readonly serveWhileStale: number;
```

- *Type:* number

---

##### `signedUrlCacheMaxAgeSec`<sup>Required</sup> <a name="signedUrlCacheMaxAgeSec" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSec"></a>

```typescript
public readonly signedUrlCacheMaxAgeSec: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeBackendBucketCdnPolicy;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketCdnPolicy">GoogleComputeBackendBucketCdnPolicy</a>

---


### GoogleComputeBackendBucketParamsOutputReference <a name="GoogleComputeBackendBucketParamsOutputReference" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference.Initializer"></a>

```typescript
import { googleComputeBackendBucket } from '@cdktn/provider-google-beta'

new googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference.resetResourceManagerTags">resetResourceManagerTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceManagerTags` <a name="resetResourceManagerTags" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference.resetResourceManagerTags"></a>

```typescript
public resetResourceManagerTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference.property.resourceManagerTagsInput">resourceManagerTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference.property.resourceManagerTags">resourceManagerTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParams">GoogleComputeBackendBucketParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceManagerTagsInput`<sup>Optional</sup> <a name="resourceManagerTagsInput" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference.property.resourceManagerTagsInput"></a>

```typescript
public readonly resourceManagerTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `resourceManagerTags`<sup>Required</sup> <a name="resourceManagerTags" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference.property.resourceManagerTags"></a>

```typescript
public readonly resourceManagerTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeBackendBucketParams;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketParams">GoogleComputeBackendBucketParams</a>

---


### GoogleComputeBackendBucketTimeoutsOutputReference <a name="GoogleComputeBackendBucketTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleComputeBackendBucket } from '@cdktn/provider-google-beta'

new googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeouts">GoogleComputeBackendBucketTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeBackendBucketTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeBackendBucket.GoogleComputeBackendBucketTimeouts">GoogleComputeBackendBucketTimeouts</a>

---



