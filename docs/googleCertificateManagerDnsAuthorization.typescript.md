# `googleCertificateManagerDnsAuthorization` Submodule <a name="`googleCertificateManagerDnsAuthorization` Submodule" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCertificateManagerDnsAuthorization <a name="GoogleCertificateManagerDnsAuthorization" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_certificate_manager_dns_authorization google_certificate_manager_dns_authorization}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.Initializer"></a>

```typescript
import { googleCertificateManagerDnsAuthorization } from '@cdktn/provider-google-beta'

new googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization(scope: Construct, id: string, config: GoogleCertificateManagerDnsAuthorizationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationConfig">GoogleCertificateManagerDnsAuthorizationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationConfig">GoogleCertificateManagerDnsAuthorizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleCertificateManagerDnsAuthorizationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeouts">GoogleCertificateManagerDnsAuthorizationTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleCertificateManagerDnsAuthorization resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.isConstruct"></a>

```typescript
import { googleCertificateManagerDnsAuthorization } from '@cdktn/provider-google-beta'

googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.isTerraformElement"></a>

```typescript
import { googleCertificateManagerDnsAuthorization } from '@cdktn/provider-google-beta'

googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.isTerraformResource"></a>

```typescript
import { googleCertificateManagerDnsAuthorization } from '@cdktn/provider-google-beta'

googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.generateConfigForImport"></a>

```typescript
import { googleCertificateManagerDnsAuthorization } from '@cdktn/provider-google-beta'

googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleCertificateManagerDnsAuthorization resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleCertificateManagerDnsAuthorization to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleCertificateManagerDnsAuthorization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_certificate_manager_dns_authorization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleCertificateManagerDnsAuthorization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.dnsResourceRecord">dnsResourceRecord</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordList">GoogleCertificateManagerDnsAuthorizationDnsResourceRecordList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference">GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeouts">GoogleCertificateManagerDnsAuthorizationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dnsResourceRecord`<sup>Required</sup> <a name="dnsResourceRecord" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.dnsResourceRecord"></a>

```typescript
public readonly dnsResourceRecord: GoogleCertificateManagerDnsAuthorizationDnsResourceRecordList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordList">GoogleCertificateManagerDnsAuthorizationDnsResourceRecordList</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference">GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleCertificateManagerDnsAuthorizationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeouts">GoogleCertificateManagerDnsAuthorizationTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorization.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCertificateManagerDnsAuthorizationConfig <a name="GoogleCertificateManagerDnsAuthorizationConfig" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationConfig.Initializer"></a>

```typescript
import { googleCertificateManagerDnsAuthorization } from '@cdktn/provider-google-beta'

const googleCertificateManagerDnsAuthorizationConfig: googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationConfig.property.domain">domain</a></code> | <code>string</code> | A domain which is being authorized. |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationConfig.property.name">name</a></code> | <code>string</code> | Name of the resource; |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationConfig.property.description">description</a></code> | <code>string</code> | A human-readable description of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_certificate_manager_dns_authorization#id GoogleCertificateManagerDnsAuthorization#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Set of label tags associated with the DNS Authorization resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationConfig.property.location">location</a></code> | <code>string</code> | The Certificate Manager location. If not specified, "global" is used. |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_certificate_manager_dns_authorization#project GoogleCertificateManagerDnsAuthorization#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeouts">GoogleCertificateManagerDnsAuthorizationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationConfig.property.type">type</a></code> | <code>string</code> | type of DNS authorization. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationConfig.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

A domain which is being authorized.

A DnsAuthorization resource covers a
single domain and its wildcard, e.g. authorization for "example.com" can
be used to issue certificates for "example.com" and "*.example.com".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_certificate_manager_dns_authorization#domain GoogleCertificateManagerDnsAuthorization#domain}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource;

provided by the client when the resource is created.
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]* which means the first character must be a letter,
and all following characters must be a dash, underscore, letter or digit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_certificate_manager_dns_authorization#name GoogleCertificateManagerDnsAuthorization#name}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_certificate_manager_dns_authorization#deletion_policy GoogleCertificateManagerDnsAuthorization#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_certificate_manager_dns_authorization#description GoogleCertificateManagerDnsAuthorization#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_certificate_manager_dns_authorization#id GoogleCertificateManagerDnsAuthorization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Set of label tags associated with the DNS Authorization resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_certificate_manager_dns_authorization#labels GoogleCertificateManagerDnsAuthorization#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The Certificate Manager location. If not specified, "global" is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_certificate_manager_dns_authorization#location GoogleCertificateManagerDnsAuthorization#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_certificate_manager_dns_authorization#project GoogleCertificateManagerDnsAuthorization#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleCertificateManagerDnsAuthorizationTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeouts">GoogleCertificateManagerDnsAuthorizationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_certificate_manager_dns_authorization#timeouts GoogleCertificateManagerDnsAuthorization#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

type of DNS authorization.

If unset during the resource creation, FIXED_RECORD will
be used for global resources, and PER_PROJECT_RECORD will be used for other locations.

FIXED_RECORD DNS authorization uses DNS-01 validation method

PER_PROJECT_RECORD DNS authorization allows for independent management
of Google-managed certificates with DNS authorization across multiple
projects. Possible values: ["FIXED_RECORD", "PER_PROJECT_RECORD"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_certificate_manager_dns_authorization#type GoogleCertificateManagerDnsAuthorization#type}

---

### GoogleCertificateManagerDnsAuthorizationDnsResourceRecord <a name="GoogleCertificateManagerDnsAuthorizationDnsResourceRecord" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecord"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecord.Initializer"></a>

```typescript
import { googleCertificateManagerDnsAuthorization } from '@cdktn/provider-google-beta'

const googleCertificateManagerDnsAuthorizationDnsResourceRecord: googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecord = { ... }
```


### GoogleCertificateManagerDnsAuthorizationTimeouts <a name="GoogleCertificateManagerDnsAuthorizationTimeouts" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeouts.Initializer"></a>

```typescript
import { googleCertificateManagerDnsAuthorization } from '@cdktn/provider-google-beta'

const googleCertificateManagerDnsAuthorizationTimeouts: googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_certificate_manager_dns_authorization#create GoogleCertificateManagerDnsAuthorization#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_certificate_manager_dns_authorization#delete GoogleCertificateManagerDnsAuthorization#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_certificate_manager_dns_authorization#update GoogleCertificateManagerDnsAuthorization#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_certificate_manager_dns_authorization#create GoogleCertificateManagerDnsAuthorization#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_certificate_manager_dns_authorization#delete GoogleCertificateManagerDnsAuthorization#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_certificate_manager_dns_authorization#update GoogleCertificateManagerDnsAuthorization#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCertificateManagerDnsAuthorizationDnsResourceRecordList <a name="GoogleCertificateManagerDnsAuthorizationDnsResourceRecordList" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.Initializer"></a>

```typescript
import { googleCertificateManagerDnsAuthorization } from '@cdktn/provider-google-beta'

new googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.get"></a>

```typescript
public get(index: number): GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference <a name="GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer"></a>

```typescript
import { googleCertificateManagerDnsAuthorization } from '@cdktn/provider-google-beta'

new googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.data">data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecord">GoogleCertificateManagerDnsAuthorizationDnsResourceRecord</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCertificateManagerDnsAuthorizationDnsResourceRecord;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationDnsResourceRecord">GoogleCertificateManagerDnsAuthorizationDnsResourceRecord</a>

---


### GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference <a name="GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleCertificateManagerDnsAuthorization } from '@cdktn/provider-google-beta'

new googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeouts">GoogleCertificateManagerDnsAuthorizationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCertificateManagerDnsAuthorizationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCertificateManagerDnsAuthorization.GoogleCertificateManagerDnsAuthorizationTimeouts">GoogleCertificateManagerDnsAuthorizationTimeouts</a>

---



