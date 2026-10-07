# `googleCesDeployment` Submodule <a name="`googleCesDeployment` Submodule" id="@cdktn/provider-google-beta.googleCesDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCesDeployment <a name="GoogleCesDeployment" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_deployment google_ces_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer"></a>

```typescript
import { googleCesDeployment } from '@cdktn/provider-google-beta'

new googleCesDeployment.GoogleCesDeployment(scope: Construct, id: string, config: GoogleCesDeploymentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig">GoogleCesDeploymentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig">GoogleCesDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.putChannelProfile">putChannelProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.putInstagramCredentials">putInstagramCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.putWhatsappCredentials">putWhatsappCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.resetInstagramCredentials">resetInstagramCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.resetWhatsappCredentials">resetWhatsappCredentials</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putChannelProfile` <a name="putChannelProfile" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.putChannelProfile"></a>

```typescript
public putChannelProfile(value: GoogleCesDeploymentChannelProfile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.putChannelProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile">GoogleCesDeploymentChannelProfile</a>

---

##### `putInstagramCredentials` <a name="putInstagramCredentials" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.putInstagramCredentials"></a>

```typescript
public putInstagramCredentials(value: GoogleCesDeploymentInstagramCredentials): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.putInstagramCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentials">GoogleCesDeploymentInstagramCredentials</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleCesDeploymentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeouts">GoogleCesDeploymentTimeouts</a>

---

##### `putWhatsappCredentials` <a name="putWhatsappCredentials" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.putWhatsappCredentials"></a>

```typescript
public putWhatsappCredentials(value: GoogleCesDeploymentWhatsappCredentials): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.putWhatsappCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentials">GoogleCesDeploymentWhatsappCredentials</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstagramCredentials` <a name="resetInstagramCredentials" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.resetInstagramCredentials"></a>

```typescript
public resetInstagramCredentials(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWhatsappCredentials` <a name="resetWhatsappCredentials" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.resetWhatsappCredentials"></a>

```typescript
public resetWhatsappCredentials(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleCesDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.isConstruct"></a>

```typescript
import { googleCesDeployment } from '@cdktn/provider-google-beta'

googleCesDeployment.GoogleCesDeployment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.isTerraformElement"></a>

```typescript
import { googleCesDeployment } from '@cdktn/provider-google-beta'

googleCesDeployment.GoogleCesDeployment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.isTerraformResource"></a>

```typescript
import { googleCesDeployment } from '@cdktn/provider-google-beta'

googleCesDeployment.GoogleCesDeployment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.generateConfigForImport"></a>

```typescript
import { googleCesDeployment } from '@cdktn/provider-google-beta'

googleCesDeployment.GoogleCesDeployment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleCesDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleCesDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleCesDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleCesDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.channelProfile">channelProfile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference">GoogleCesDeploymentChannelProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.instagramCredentials">instagramCredentials</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference">GoogleCesDeploymentInstagramCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference">GoogleCesDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.whatsappCredentials">whatsappCredentials</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference">GoogleCesDeploymentWhatsappCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.appInput">appInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.appVersionInput">appVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.channelProfileInput">channelProfileInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile">GoogleCesDeploymentChannelProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.instagramCredentialsInput">instagramCredentialsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentials">GoogleCesDeploymentInstagramCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeouts">GoogleCesDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.whatsappCredentialsInput">whatsappCredentialsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentials">GoogleCesDeploymentWhatsappCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.app">app</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.appVersion">appVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `channelProfile`<sup>Required</sup> <a name="channelProfile" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.channelProfile"></a>

```typescript
public readonly channelProfile: GoogleCesDeploymentChannelProfileOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference">GoogleCesDeploymentChannelProfileOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `instagramCredentials`<sup>Required</sup> <a name="instagramCredentials" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.instagramCredentials"></a>

```typescript
public readonly instagramCredentials: GoogleCesDeploymentInstagramCredentialsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference">GoogleCesDeploymentInstagramCredentialsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleCesDeploymentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference">GoogleCesDeploymentTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `whatsappCredentials`<sup>Required</sup> <a name="whatsappCredentials" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.whatsappCredentials"></a>

```typescript
public readonly whatsappCredentials: GoogleCesDeploymentWhatsappCredentialsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference">GoogleCesDeploymentWhatsappCredentialsOutputReference</a>

---

##### `appInput`<sup>Optional</sup> <a name="appInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.appInput"></a>

```typescript
public readonly appInput: string;
```

- *Type:* string

---

##### `appVersionInput`<sup>Optional</sup> <a name="appVersionInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.appVersionInput"></a>

```typescript
public readonly appVersionInput: string;
```

- *Type:* string

---

##### `channelProfileInput`<sup>Optional</sup> <a name="channelProfileInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.channelProfileInput"></a>

```typescript
public readonly channelProfileInput: GoogleCesDeploymentChannelProfile;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile">GoogleCesDeploymentChannelProfile</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instagramCredentialsInput`<sup>Optional</sup> <a name="instagramCredentialsInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.instagramCredentialsInput"></a>

```typescript
public readonly instagramCredentialsInput: GoogleCesDeploymentInstagramCredentials;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentials">GoogleCesDeploymentInstagramCredentials</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleCesDeploymentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeouts">GoogleCesDeploymentTimeouts</a>

---

##### `whatsappCredentialsInput`<sup>Optional</sup> <a name="whatsappCredentialsInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.whatsappCredentialsInput"></a>

```typescript
public readonly whatsappCredentialsInput: GoogleCesDeploymentWhatsappCredentials;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentials">GoogleCesDeploymentWhatsappCredentials</a>

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.app"></a>

```typescript
public readonly app: string;
```

- *Type:* string

---

##### `appVersion`<sup>Required</sup> <a name="appVersion" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.appVersion"></a>

```typescript
public readonly appVersion: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeployment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCesDeploymentChannelProfile <a name="GoogleCesDeploymentChannelProfile" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile.Initializer"></a>

```typescript
import { googleCesDeployment } from '@cdktn/provider-google-beta'

const googleCesDeploymentChannelProfile: googleCesDeployment.GoogleCesDeploymentChannelProfile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile.property.channelType">channelType</a></code> | <code>string</code> | The type of the channel profile. Possible values: UNKNOWN WEB_UI API TWILIO GOOGLE_TELEPHONY_PLATFORM CONTACT_CENTER_AS_A_SERVICE FIVE9 CONTACT_CENTER_INTEGRATION WHATSAPP INSTAGRAM. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile.property.disableBargeInControl">disableBargeInControl</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to disable user barge-in control in the conversation. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile.property.disableDtmf">disableDtmf</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to disable DTMF (dual-tone multi-frequency). |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile.property.personaProperty">personaProperty</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaProperty">GoogleCesDeploymentChannelProfilePersonaProperty</a></code> | persona_property block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile.property.profileId">profileId</a></code> | <code>string</code> | The unique identifier of the channel profile. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile.property.webWidgetConfig">webWidgetConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfig">GoogleCesDeploymentChannelProfileWebWidgetConfig</a></code> | web_widget_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile.property.whatsappConfig">whatsappConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfig">GoogleCesDeploymentChannelProfileWhatsappConfig</a></code> | whatsapp_config block. |

---

##### `channelType`<sup>Optional</sup> <a name="channelType" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile.property.channelType"></a>

```typescript
public readonly channelType: string;
```

- *Type:* string

The type of the channel profile. Possible values: UNKNOWN WEB_UI API TWILIO GOOGLE_TELEPHONY_PLATFORM CONTACT_CENTER_AS_A_SERVICE FIVE9 CONTACT_CENTER_INTEGRATION WHATSAPP INSTAGRAM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_deployment#channel_type GoogleCesDeployment#channel_type}

---

##### `disableBargeInControl`<sup>Optional</sup> <a name="disableBargeInControl" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile.property.disableBargeInControl"></a>

```typescript
public readonly disableBargeInControl: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to disable user barge-in control in the conversation.

**true**: User interruptions are disabled while the agent is speaking.
- **false**: The agent retains automatic control over when the user can
interrupt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_deployment#disable_barge_in_control GoogleCesDeployment#disable_barge_in_control}

---

##### `disableDtmf`<sup>Optional</sup> <a name="disableDtmf" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile.property.disableDtmf"></a>

```typescript
public readonly disableDtmf: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to disable DTMF (dual-tone multi-frequency).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_deployment#disable_dtmf GoogleCesDeployment#disable_dtmf}

---

##### `personaProperty`<sup>Optional</sup> <a name="personaProperty" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile.property.personaProperty"></a>

```typescript
public readonly personaProperty: GoogleCesDeploymentChannelProfilePersonaProperty;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaProperty">GoogleCesDeploymentChannelProfilePersonaProperty</a>

persona_property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_deployment#persona_property GoogleCesDeployment#persona_property}

---

##### `profileId`<sup>Optional</sup> <a name="profileId" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile.property.profileId"></a>

```typescript
public readonly profileId: string;
```

- *Type:* string

The unique identifier of the channel profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_deployment#profile_id GoogleCesDeployment#profile_id}

---

##### `webWidgetConfig`<sup>Optional</sup> <a name="webWidgetConfig" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile.property.webWidgetConfig"></a>

```typescript
public readonly webWidgetConfig: GoogleCesDeploymentChannelProfileWebWidgetConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfig">GoogleCesDeploymentChannelProfileWebWidgetConfig</a>

web_widget_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_deployment#web_widget_config GoogleCesDeployment#web_widget_config}

---

##### `whatsappConfig`<sup>Optional</sup> <a name="whatsappConfig" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile.property.whatsappConfig"></a>

```typescript
public readonly whatsappConfig: GoogleCesDeploymentChannelProfileWhatsappConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfig">GoogleCesDeploymentChannelProfileWhatsappConfig</a>

whatsapp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_deployment#whatsapp_config GoogleCesDeployment#whatsapp_config}

---

### GoogleCesDeploymentChannelProfilePersonaProperty <a name="GoogleCesDeploymentChannelProfilePersonaProperty" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaProperty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaProperty.Initializer"></a>

```typescript
import { googleCesDeployment } from '@cdktn/provider-google-beta'

const googleCesDeploymentChannelProfilePersonaProperty: googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaProperty = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaProperty.property.persona">persona</a></code> | <code>string</code> | The persona of the channel. Possible values: UNKNOWN CONCISE CHATTY. |

---

##### `persona`<sup>Optional</sup> <a name="persona" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaProperty.property.persona"></a>

```typescript
public readonly persona: string;
```

- *Type:* string

The persona of the channel. Possible values: UNKNOWN CONCISE CHATTY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_deployment#persona GoogleCesDeployment#persona}

---

### GoogleCesDeploymentChannelProfileWebWidgetConfig <a name="GoogleCesDeploymentChannelProfileWebWidgetConfig" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfig.Initializer"></a>

```typescript
import { googleCesDeployment } from '@cdktn/provider-google-beta'

const googleCesDeploymentChannelProfileWebWidgetConfig: googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfig.property.modality">modality</a></code> | <code>string</code> | The modality of the web widget. Possible values: MODALITY_UNSPECIFIED CHAT_AND_VOICE VOICE_ONLY CHAT_ONLY CHAT_VOICE_AND_VIDEO. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfig.property.securitySettings">securitySettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings">GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings</a></code> | security_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfig.property.theme">theme</a></code> | <code>string</code> | The theme of the web widget. Possible values: THEME_UNSPECIFIED LIGHT DARK. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfig.property.webWidgetTitle">webWidgetTitle</a></code> | <code>string</code> | The title of the web widget. |

---

##### `modality`<sup>Optional</sup> <a name="modality" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfig.property.modality"></a>

```typescript
public readonly modality: string;
```

- *Type:* string

The modality of the web widget. Possible values: MODALITY_UNSPECIFIED CHAT_AND_VOICE VOICE_ONLY CHAT_ONLY CHAT_VOICE_AND_VIDEO.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_deployment#modality GoogleCesDeployment#modality}

---

##### `securitySettings`<sup>Optional</sup> <a name="securitySettings" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfig.property.securitySettings"></a>

```typescript
public readonly securitySettings: GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings">GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings</a>

security_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_deployment#security_settings GoogleCesDeployment#security_settings}

---

##### `theme`<sup>Optional</sup> <a name="theme" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfig.property.theme"></a>

```typescript
public readonly theme: string;
```

- *Type:* string

The theme of the web widget. Possible values: THEME_UNSPECIFIED LIGHT DARK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_deployment#theme GoogleCesDeployment#theme}

---

##### `webWidgetTitle`<sup>Optional</sup> <a name="webWidgetTitle" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfig.property.webWidgetTitle"></a>

```typescript
public readonly webWidgetTitle: string;
```

- *Type:* string

The title of the web widget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_deployment#web_widget_title GoogleCesDeployment#web_widget_title}

---

### GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings <a name="GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings.Initializer"></a>

```typescript
import { googleCesDeployment } from '@cdktn/provider-google-beta'

const googleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings: googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | The origins that are allowed to host the web widget. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings.property.enableOriginCheck">enableOriginCheck</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether origin check for the web widget is enabled. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings.property.enablePublicAccess">enablePublicAccess</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether public access to the web widget is enabled. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings.property.enableRecaptcha">enableRecaptcha</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether reCAPTCHA verification for the web widget is enabled. |

---

##### `allowedOrigins`<sup>Optional</sup> <a name="allowedOrigins" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

The origins that are allowed to host the web widget.

An origin is defined by RFC 6454. If empty, all origins are allowed. A maximum of 100 origins is allowed. Example: "https://example.com"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_deployment#allowed_origins GoogleCesDeployment#allowed_origins}

---

##### `enableOriginCheck`<sup>Optional</sup> <a name="enableOriginCheck" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings.property.enableOriginCheck"></a>

```typescript
public readonly enableOriginCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether origin check for the web widget is enabled.

If true, the web widget will check the origin of the website that loads the web widget and only allow it to be loaded in the same origin or any of the allowed origins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_deployment#enable_origin_check GoogleCesDeployment#enable_origin_check}

---

##### `enablePublicAccess`<sup>Optional</sup> <a name="enablePublicAccess" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings.property.enablePublicAccess"></a>

```typescript
public readonly enablePublicAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether public access to the web widget is enabled.

If true, the web widget will be publicly accessible. If false, the web widget must be integrated with your own authentication and authorization system to return valid credentials for accessing the CES agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_deployment#enable_public_access GoogleCesDeployment#enable_public_access}

---

##### `enableRecaptcha`<sup>Optional</sup> <a name="enableRecaptcha" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings.property.enableRecaptcha"></a>

```typescript
public readonly enableRecaptcha: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether reCAPTCHA verification for the web widget is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_deployment#enable_recaptcha GoogleCesDeployment#enable_recaptcha}

---

### GoogleCesDeploymentChannelProfileWhatsappConfig <a name="GoogleCesDeploymentChannelProfileWhatsappConfig" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfig.Initializer"></a>

```typescript
import { googleCesDeployment } from '@cdktn/provider-google-beta'

const googleCesDeploymentChannelProfileWhatsappConfig: googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfig.property.phoneNumberId">phoneNumberId</a></code> | <code>string</code> | Required. The Meta phone number ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfig.property.wabaId">wabaId</a></code> | <code>string</code> | Required. The WhatsApp Business Account ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfig.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | Optional. The phone number in E.164 format. |

---

##### `phoneNumberId`<sup>Required</sup> <a name="phoneNumberId" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfig.property.phoneNumberId"></a>

```typescript
public readonly phoneNumberId: string;
```

- *Type:* string

Required. The Meta phone number ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_deployment#phone_number_id GoogleCesDeployment#phone_number_id}

---

##### `wabaId`<sup>Required</sup> <a name="wabaId" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfig.property.wabaId"></a>

```typescript
public readonly wabaId: string;
```

- *Type:* string

Required. The WhatsApp Business Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_deployment#waba_id GoogleCesDeployment#waba_id}

---

##### `phoneNumber`<sup>Optional</sup> <a name="phoneNumber" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfig.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

Optional. The phone number in E.164 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_deployment#phone_number GoogleCesDeployment#phone_number}

---

### GoogleCesDeploymentConfig <a name="GoogleCesDeploymentConfig" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.Initializer"></a>

```typescript
import { googleCesDeployment } from '@cdktn/provider-google-beta'

const googleCesDeploymentConfig: googleCesDeployment.GoogleCesDeploymentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.app">app</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.appVersion">appVersion</a></code> | <code>string</code> | The resource name of the app version to deploy. Format: projects/{project}/locations/{location}/apps/{app}/versions/{version}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.channelProfile">channelProfile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile">GoogleCesDeploymentChannelProfile</a></code> | channel_profile block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.displayName">displayName</a></code> | <code>string</code> | Display name of the deployment. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_deployment#id GoogleCesDeployment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.instagramCredentials">instagramCredentials</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentials">GoogleCesDeploymentInstagramCredentials</a></code> | instagram_credentials block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_deployment#project GoogleCesDeployment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeouts">GoogleCesDeploymentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.whatsappCredentials">whatsappCredentials</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentials">GoogleCesDeploymentWhatsappCredentials</a></code> | whatsapp_credentials block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.app"></a>

```typescript
public readonly app: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_deployment#app GoogleCesDeployment#app}

---

##### `appVersion`<sup>Required</sup> <a name="appVersion" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.appVersion"></a>

```typescript
public readonly appVersion: string;
```

- *Type:* string

The resource name of the app version to deploy. Format: projects/{project}/locations/{location}/apps/{app}/versions/{version}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_deployment#app_version GoogleCesDeployment#app_version}

---

##### `channelProfile`<sup>Required</sup> <a name="channelProfile" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.channelProfile"></a>

```typescript
public readonly channelProfile: GoogleCesDeploymentChannelProfile;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile">GoogleCesDeploymentChannelProfile</a>

channel_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_deployment#channel_profile GoogleCesDeployment#channel_profile}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Display name of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_deployment#display_name GoogleCesDeployment#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_deployment#location GoogleCesDeployment#location}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_deployment#deletion_policy GoogleCesDeployment#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_deployment#id GoogleCesDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instagramCredentials`<sup>Optional</sup> <a name="instagramCredentials" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.instagramCredentials"></a>

```typescript
public readonly instagramCredentials: GoogleCesDeploymentInstagramCredentials;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentials">GoogleCesDeploymentInstagramCredentials</a>

instagram_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_deployment#instagram_credentials GoogleCesDeployment#instagram_credentials}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_deployment#project GoogleCesDeployment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleCesDeploymentTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeouts">GoogleCesDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_deployment#timeouts GoogleCesDeployment#timeouts}

---

##### `whatsappCredentials`<sup>Optional</sup> <a name="whatsappCredentials" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentConfig.property.whatsappCredentials"></a>

```typescript
public readonly whatsappCredentials: GoogleCesDeploymentWhatsappCredentials;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentials">GoogleCesDeploymentWhatsappCredentials</a>

whatsapp_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_deployment#whatsapp_credentials GoogleCesDeployment#whatsapp_credentials}

---

### GoogleCesDeploymentInstagramCredentials <a name="GoogleCesDeploymentInstagramCredentials" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentials.Initializer"></a>

```typescript
import { googleCesDeployment } from '@cdktn/provider-google-beta'

const googleCesDeploymentInstagramCredentials: googleCesDeployment.GoogleCesDeploymentInstagramCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentials.property.authCode">authCode</a></code> | <code>string</code> | The Meta auth code provided by the embedded signup flow. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentials.property.authCodeWo">authCodeWo</a></code> | <code>string</code> | The Meta auth code provided by the embedded signup flow. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentials.property.authCodeWoVersion">authCodeWoVersion</a></code> | <code>string</code> | Triggers update of 'auth_code_wo' write-only. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentials.property.conversationProfileId">conversationProfileId</a></code> | <code>string</code> | The Conversation Profile ID to use for the deployment. |

---

##### `authCode`<sup>Optional</sup> <a name="authCode" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentials.property.authCode"></a>

```typescript
public readonly authCode: string;
```

- *Type:* string

The Meta auth code provided by the embedded signup flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_deployment#auth_code GoogleCesDeployment#auth_code}

---

##### `authCodeWo`<sup>Optional</sup> <a name="authCodeWo" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentials.property.authCodeWo"></a>

```typescript
public readonly authCodeWo: string;
```

- *Type:* string

The Meta auth code provided by the embedded signup flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_deployment#auth_code_wo GoogleCesDeployment#auth_code_wo}

---

##### `authCodeWoVersion`<sup>Optional</sup> <a name="authCodeWoVersion" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentials.property.authCodeWoVersion"></a>

```typescript
public readonly authCodeWoVersion: string;
```

- *Type:* string

Triggers update of 'auth_code_wo' write-only.

Increment this value when an update to 'auth_code_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_deployment#auth_code_wo_version GoogleCesDeployment#auth_code_wo_version}

---

##### `conversationProfileId`<sup>Optional</sup> <a name="conversationProfileId" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentials.property.conversationProfileId"></a>

```typescript
public readonly conversationProfileId: string;
```

- *Type:* string

The Conversation Profile ID to use for the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_deployment#conversation_profile_id GoogleCesDeployment#conversation_profile_id}

---

### GoogleCesDeploymentTimeouts <a name="GoogleCesDeploymentTimeouts" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeouts.Initializer"></a>

```typescript
import { googleCesDeployment } from '@cdktn/provider-google-beta'

const googleCesDeploymentTimeouts: googleCesDeployment.GoogleCesDeploymentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_deployment#create GoogleCesDeployment#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_deployment#delete GoogleCesDeployment#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_deployment#update GoogleCesDeployment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_deployment#create GoogleCesDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_deployment#delete GoogleCesDeployment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_deployment#update GoogleCesDeployment#update}.

---

### GoogleCesDeploymentWhatsappCredentials <a name="GoogleCesDeploymentWhatsappCredentials" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentials.Initializer"></a>

```typescript
import { googleCesDeployment } from '@cdktn/provider-google-beta'

const googleCesDeploymentWhatsappCredentials: googleCesDeployment.GoogleCesDeploymentWhatsappCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentials.property.businessAccountId">businessAccountId</a></code> | <code>string</code> | The Business Account ID to use for the phone number. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentials.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | The phone number to register with WhatsApp. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentials.property.wabaId">wabaId</a></code> | <code>string</code> | The WhatsApp Business Account ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentials.property.authCode">authCode</a></code> | <code>string</code> | The Meta auth code provided by the embedded signup flow. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentials.property.authCodeWo">authCodeWo</a></code> | <code>string</code> | The Meta auth code provided by the embedded signup flow. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentials.property.authCodeWoVersion">authCodeWoVersion</a></code> | <code>string</code> | Triggers update of 'auth_code_wo' write-only. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentials.property.conversationProfileId">conversationProfileId</a></code> | <code>string</code> | The Conversation Profile ID to use for the deployment. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentials.property.pin">pin</a></code> | <code>string</code> | The 6-digit PIN created by the user for two-step verification. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentials.property.pinWo">pinWo</a></code> | <code>string</code> | The 6-digit PIN created by the user for two-step verification. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentials.property.pinWoVersion">pinWoVersion</a></code> | <code>string</code> | Triggers update of 'pin_wo' write-only. |

---

##### `businessAccountId`<sup>Required</sup> <a name="businessAccountId" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentials.property.businessAccountId"></a>

```typescript
public readonly businessAccountId: string;
```

- *Type:* string

The Business Account ID to use for the phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_deployment#business_account_id GoogleCesDeployment#business_account_id}

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentials.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

The phone number to register with WhatsApp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_deployment#phone_number GoogleCesDeployment#phone_number}

---

##### `wabaId`<sup>Required</sup> <a name="wabaId" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentials.property.wabaId"></a>

```typescript
public readonly wabaId: string;
```

- *Type:* string

The WhatsApp Business Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_deployment#waba_id GoogleCesDeployment#waba_id}

---

##### `authCode`<sup>Optional</sup> <a name="authCode" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentials.property.authCode"></a>

```typescript
public readonly authCode: string;
```

- *Type:* string

The Meta auth code provided by the embedded signup flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_deployment#auth_code GoogleCesDeployment#auth_code}

---

##### `authCodeWo`<sup>Optional</sup> <a name="authCodeWo" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentials.property.authCodeWo"></a>

```typescript
public readonly authCodeWo: string;
```

- *Type:* string

The Meta auth code provided by the embedded signup flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_deployment#auth_code_wo GoogleCesDeployment#auth_code_wo}

---

##### `authCodeWoVersion`<sup>Optional</sup> <a name="authCodeWoVersion" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentials.property.authCodeWoVersion"></a>

```typescript
public readonly authCodeWoVersion: string;
```

- *Type:* string

Triggers update of 'auth_code_wo' write-only.

Increment this value when an update to 'auth_code_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_deployment#auth_code_wo_version GoogleCesDeployment#auth_code_wo_version}

---

##### `conversationProfileId`<sup>Optional</sup> <a name="conversationProfileId" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentials.property.conversationProfileId"></a>

```typescript
public readonly conversationProfileId: string;
```

- *Type:* string

The Conversation Profile ID to use for the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_deployment#conversation_profile_id GoogleCesDeployment#conversation_profile_id}

---

##### `pin`<sup>Optional</sup> <a name="pin" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentials.property.pin"></a>

```typescript
public readonly pin: string;
```

- *Type:* string

The 6-digit PIN created by the user for two-step verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_deployment#pin GoogleCesDeployment#pin}

---

##### `pinWo`<sup>Optional</sup> <a name="pinWo" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentials.property.pinWo"></a>

```typescript
public readonly pinWo: string;
```

- *Type:* string

The 6-digit PIN created by the user for two-step verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_deployment#pin_wo GoogleCesDeployment#pin_wo}

---

##### `pinWoVersion`<sup>Optional</sup> <a name="pinWoVersion" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentials.property.pinWoVersion"></a>

```typescript
public readonly pinWoVersion: string;
```

- *Type:* string

Triggers update of 'pin_wo' write-only.

Increment this value when an update to 'pin_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_deployment#pin_wo_version GoogleCesDeployment#pin_wo_version}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCesDeploymentChannelProfileOutputReference <a name="GoogleCesDeploymentChannelProfileOutputReference" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.Initializer"></a>

```typescript
import { googleCesDeployment } from '@cdktn/provider-google-beta'

new googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.putPersonaProperty">putPersonaProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.putWebWidgetConfig">putWebWidgetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.putWhatsappConfig">putWhatsappConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.resetChannelType">resetChannelType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.resetDisableBargeInControl">resetDisableBargeInControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.resetDisableDtmf">resetDisableDtmf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.resetPersonaProperty">resetPersonaProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.resetProfileId">resetProfileId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.resetWebWidgetConfig">resetWebWidgetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.resetWhatsappConfig">resetWhatsappConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPersonaProperty` <a name="putPersonaProperty" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.putPersonaProperty"></a>

```typescript
public putPersonaProperty(value: GoogleCesDeploymentChannelProfilePersonaProperty): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.putPersonaProperty.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaProperty">GoogleCesDeploymentChannelProfilePersonaProperty</a>

---

##### `putWebWidgetConfig` <a name="putWebWidgetConfig" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.putWebWidgetConfig"></a>

```typescript
public putWebWidgetConfig(value: GoogleCesDeploymentChannelProfileWebWidgetConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.putWebWidgetConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfig">GoogleCesDeploymentChannelProfileWebWidgetConfig</a>

---

##### `putWhatsappConfig` <a name="putWhatsappConfig" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.putWhatsappConfig"></a>

```typescript
public putWhatsappConfig(value: GoogleCesDeploymentChannelProfileWhatsappConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.putWhatsappConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfig">GoogleCesDeploymentChannelProfileWhatsappConfig</a>

---

##### `resetChannelType` <a name="resetChannelType" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.resetChannelType"></a>

```typescript
public resetChannelType(): void
```

##### `resetDisableBargeInControl` <a name="resetDisableBargeInControl" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.resetDisableBargeInControl"></a>

```typescript
public resetDisableBargeInControl(): void
```

##### `resetDisableDtmf` <a name="resetDisableDtmf" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.resetDisableDtmf"></a>

```typescript
public resetDisableDtmf(): void
```

##### `resetPersonaProperty` <a name="resetPersonaProperty" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.resetPersonaProperty"></a>

```typescript
public resetPersonaProperty(): void
```

##### `resetProfileId` <a name="resetProfileId" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.resetProfileId"></a>

```typescript
public resetProfileId(): void
```

##### `resetWebWidgetConfig` <a name="resetWebWidgetConfig" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.resetWebWidgetConfig"></a>

```typescript
public resetWebWidgetConfig(): void
```

##### `resetWhatsappConfig` <a name="resetWhatsappConfig" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.resetWhatsappConfig"></a>

```typescript
public resetWhatsappConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.personaProperty">personaProperty</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference">GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.webWidgetConfig">webWidgetConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference">GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.whatsappConfig">whatsappConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference">GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.channelTypeInput">channelTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.disableBargeInControlInput">disableBargeInControlInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.disableDtmfInput">disableDtmfInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.personaPropertyInput">personaPropertyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaProperty">GoogleCesDeploymentChannelProfilePersonaProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.profileIdInput">profileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.webWidgetConfigInput">webWidgetConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfig">GoogleCesDeploymentChannelProfileWebWidgetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.whatsappConfigInput">whatsappConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfig">GoogleCesDeploymentChannelProfileWhatsappConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.channelType">channelType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.disableBargeInControl">disableBargeInControl</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.disableDtmf">disableDtmf</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.profileId">profileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile">GoogleCesDeploymentChannelProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `personaProperty`<sup>Required</sup> <a name="personaProperty" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.personaProperty"></a>

```typescript
public readonly personaProperty: GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference">GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference</a>

---

##### `webWidgetConfig`<sup>Required</sup> <a name="webWidgetConfig" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.webWidgetConfig"></a>

```typescript
public readonly webWidgetConfig: GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference">GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference</a>

---

##### `whatsappConfig`<sup>Required</sup> <a name="whatsappConfig" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.whatsappConfig"></a>

```typescript
public readonly whatsappConfig: GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference">GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference</a>

---

##### `channelTypeInput`<sup>Optional</sup> <a name="channelTypeInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.channelTypeInput"></a>

```typescript
public readonly channelTypeInput: string;
```

- *Type:* string

---

##### `disableBargeInControlInput`<sup>Optional</sup> <a name="disableBargeInControlInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.disableBargeInControlInput"></a>

```typescript
public readonly disableBargeInControlInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `disableDtmfInput`<sup>Optional</sup> <a name="disableDtmfInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.disableDtmfInput"></a>

```typescript
public readonly disableDtmfInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `personaPropertyInput`<sup>Optional</sup> <a name="personaPropertyInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.personaPropertyInput"></a>

```typescript
public readonly personaPropertyInput: GoogleCesDeploymentChannelProfilePersonaProperty;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaProperty">GoogleCesDeploymentChannelProfilePersonaProperty</a>

---

##### `profileIdInput`<sup>Optional</sup> <a name="profileIdInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.profileIdInput"></a>

```typescript
public readonly profileIdInput: string;
```

- *Type:* string

---

##### `webWidgetConfigInput`<sup>Optional</sup> <a name="webWidgetConfigInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.webWidgetConfigInput"></a>

```typescript
public readonly webWidgetConfigInput: GoogleCesDeploymentChannelProfileWebWidgetConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfig">GoogleCesDeploymentChannelProfileWebWidgetConfig</a>

---

##### `whatsappConfigInput`<sup>Optional</sup> <a name="whatsappConfigInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.whatsappConfigInput"></a>

```typescript
public readonly whatsappConfigInput: GoogleCesDeploymentChannelProfileWhatsappConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfig">GoogleCesDeploymentChannelProfileWhatsappConfig</a>

---

##### `channelType`<sup>Required</sup> <a name="channelType" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.channelType"></a>

```typescript
public readonly channelType: string;
```

- *Type:* string

---

##### `disableBargeInControl`<sup>Required</sup> <a name="disableBargeInControl" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.disableBargeInControl"></a>

```typescript
public readonly disableBargeInControl: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `disableDtmf`<sup>Required</sup> <a name="disableDtmf" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.disableDtmf"></a>

```typescript
public readonly disableDtmf: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.profileId"></a>

```typescript
public readonly profileId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesDeploymentChannelProfile;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfile">GoogleCesDeploymentChannelProfile</a>

---


### GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference <a name="GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.Initializer"></a>

```typescript
import { googleCesDeployment } from '@cdktn/provider-google-beta'

new googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.resetPersona">resetPersona</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPersona` <a name="resetPersona" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.resetPersona"></a>

```typescript
public resetPersona(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.property.personaInput">personaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.property.persona">persona</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaProperty">GoogleCesDeploymentChannelProfilePersonaProperty</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `personaInput`<sup>Optional</sup> <a name="personaInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.property.personaInput"></a>

```typescript
public readonly personaInput: string;
```

- *Type:* string

---

##### `persona`<sup>Required</sup> <a name="persona" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.property.persona"></a>

```typescript
public readonly persona: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaPropertyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesDeploymentChannelProfilePersonaProperty;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfilePersonaProperty">GoogleCesDeploymentChannelProfilePersonaProperty</a>

---


### GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference <a name="GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.Initializer"></a>

```typescript
import { googleCesDeployment } from '@cdktn/provider-google-beta'

new googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.putSecuritySettings">putSecuritySettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.resetModality">resetModality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.resetSecuritySettings">resetSecuritySettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.resetTheme">resetTheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.resetWebWidgetTitle">resetWebWidgetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSecuritySettings` <a name="putSecuritySettings" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.putSecuritySettings"></a>

```typescript
public putSecuritySettings(value: GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.putSecuritySettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings">GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings</a>

---

##### `resetModality` <a name="resetModality" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.resetModality"></a>

```typescript
public resetModality(): void
```

##### `resetSecuritySettings` <a name="resetSecuritySettings" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.resetSecuritySettings"></a>

```typescript
public resetSecuritySettings(): void
```

##### `resetTheme` <a name="resetTheme" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.resetTheme"></a>

```typescript
public resetTheme(): void
```

##### `resetWebWidgetTitle` <a name="resetWebWidgetTitle" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.resetWebWidgetTitle"></a>

```typescript
public resetWebWidgetTitle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.securitySettings">securitySettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference">GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.modalityInput">modalityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.securitySettingsInput">securitySettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings">GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.themeInput">themeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.webWidgetTitleInput">webWidgetTitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.modality">modality</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.theme">theme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.webWidgetTitle">webWidgetTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfig">GoogleCesDeploymentChannelProfileWebWidgetConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securitySettings`<sup>Required</sup> <a name="securitySettings" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.securitySettings"></a>

```typescript
public readonly securitySettings: GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference">GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference</a>

---

##### `modalityInput`<sup>Optional</sup> <a name="modalityInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.modalityInput"></a>

```typescript
public readonly modalityInput: string;
```

- *Type:* string

---

##### `securitySettingsInput`<sup>Optional</sup> <a name="securitySettingsInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.securitySettingsInput"></a>

```typescript
public readonly securitySettingsInput: GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings">GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings</a>

---

##### `themeInput`<sup>Optional</sup> <a name="themeInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.themeInput"></a>

```typescript
public readonly themeInput: string;
```

- *Type:* string

---

##### `webWidgetTitleInput`<sup>Optional</sup> <a name="webWidgetTitleInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.webWidgetTitleInput"></a>

```typescript
public readonly webWidgetTitleInput: string;
```

- *Type:* string

---

##### `modality`<sup>Required</sup> <a name="modality" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.modality"></a>

```typescript
public readonly modality: string;
```

- *Type:* string

---

##### `theme`<sup>Required</sup> <a name="theme" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.theme"></a>

```typescript
public readonly theme: string;
```

- *Type:* string

---

##### `webWidgetTitle`<sup>Required</sup> <a name="webWidgetTitle" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.webWidgetTitle"></a>

```typescript
public readonly webWidgetTitle: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesDeploymentChannelProfileWebWidgetConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfig">GoogleCesDeploymentChannelProfileWebWidgetConfig</a>

---


### GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference <a name="GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.Initializer"></a>

```typescript
import { googleCesDeployment } from '@cdktn/provider-google-beta'

new googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resetAllowedOrigins">resetAllowedOrigins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resetEnableOriginCheck">resetEnableOriginCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resetEnablePublicAccess">resetEnablePublicAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resetEnableRecaptcha">resetEnableRecaptcha</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedOrigins` <a name="resetAllowedOrigins" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resetAllowedOrigins"></a>

```typescript
public resetAllowedOrigins(): void
```

##### `resetEnableOriginCheck` <a name="resetEnableOriginCheck" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resetEnableOriginCheck"></a>

```typescript
public resetEnableOriginCheck(): void
```

##### `resetEnablePublicAccess` <a name="resetEnablePublicAccess" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resetEnablePublicAccess"></a>

```typescript
public resetEnablePublicAccess(): void
```

##### `resetEnableRecaptcha` <a name="resetEnableRecaptcha" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.resetEnableRecaptcha"></a>

```typescript
public resetEnableRecaptcha(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.allowedOriginsInput">allowedOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enableOriginCheckInput">enableOriginCheckInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enablePublicAccessInput">enablePublicAccessInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enableRecaptchaInput">enableRecaptchaInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enableOriginCheck">enableOriginCheck</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enablePublicAccess">enablePublicAccess</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enableRecaptcha">enableRecaptcha</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings">GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedOriginsInput`<sup>Optional</sup> <a name="allowedOriginsInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.allowedOriginsInput"></a>

```typescript
public readonly allowedOriginsInput: string[];
```

- *Type:* string[]

---

##### `enableOriginCheckInput`<sup>Optional</sup> <a name="enableOriginCheckInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enableOriginCheckInput"></a>

```typescript
public readonly enableOriginCheckInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enablePublicAccessInput`<sup>Optional</sup> <a name="enablePublicAccessInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enablePublicAccessInput"></a>

```typescript
public readonly enablePublicAccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableRecaptchaInput`<sup>Optional</sup> <a name="enableRecaptchaInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enableRecaptchaInput"></a>

```typescript
public readonly enableRecaptchaInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

---

##### `enableOriginCheck`<sup>Required</sup> <a name="enableOriginCheck" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enableOriginCheck"></a>

```typescript
public readonly enableOriginCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enablePublicAccess`<sup>Required</sup> <a name="enablePublicAccess" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enablePublicAccess"></a>

```typescript
public readonly enablePublicAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableRecaptcha`<sup>Required</sup> <a name="enableRecaptcha" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.enableRecaptcha"></a>

```typescript
public readonly enableRecaptcha: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings">GoogleCesDeploymentChannelProfileWebWidgetConfigSecuritySettings</a>

---


### GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference <a name="GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.Initializer"></a>

```typescript
import { googleCesDeployment } from '@cdktn/provider-google-beta'

new googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.resetPhoneNumber">resetPhoneNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPhoneNumber` <a name="resetPhoneNumber" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.resetPhoneNumber"></a>

```typescript
public resetPhoneNumber(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.property.thumbnailUrl">thumbnailUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.property.phoneNumberIdInput">phoneNumberIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.property.phoneNumberInput">phoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.property.wabaIdInput">wabaIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.property.phoneNumberId">phoneNumberId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.property.wabaId">wabaId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfig">GoogleCesDeploymentChannelProfileWhatsappConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `thumbnailUrl`<sup>Required</sup> <a name="thumbnailUrl" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.property.thumbnailUrl"></a>

```typescript
public readonly thumbnailUrl: string;
```

- *Type:* string

---

##### `phoneNumberIdInput`<sup>Optional</sup> <a name="phoneNumberIdInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.property.phoneNumberIdInput"></a>

```typescript
public readonly phoneNumberIdInput: string;
```

- *Type:* string

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.property.phoneNumberInput"></a>

```typescript
public readonly phoneNumberInput: string;
```

- *Type:* string

---

##### `wabaIdInput`<sup>Optional</sup> <a name="wabaIdInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.property.wabaIdInput"></a>

```typescript
public readonly wabaIdInput: string;
```

- *Type:* string

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

---

##### `phoneNumberId`<sup>Required</sup> <a name="phoneNumberId" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.property.phoneNumberId"></a>

```typescript
public readonly phoneNumberId: string;
```

- *Type:* string

---

##### `wabaId`<sup>Required</sup> <a name="wabaId" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.property.wabaId"></a>

```typescript
public readonly wabaId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesDeploymentChannelProfileWhatsappConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentChannelProfileWhatsappConfig">GoogleCesDeploymentChannelProfileWhatsappConfig</a>

---


### GoogleCesDeploymentInstagramCredentialsOutputReference <a name="GoogleCesDeploymentInstagramCredentialsOutputReference" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.Initializer"></a>

```typescript
import { googleCesDeployment } from '@cdktn/provider-google-beta'

new googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.resetAuthCode">resetAuthCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.resetAuthCodeWo">resetAuthCodeWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.resetAuthCodeWoVersion">resetAuthCodeWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.resetConversationProfileId">resetConversationProfileId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthCode` <a name="resetAuthCode" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.resetAuthCode"></a>

```typescript
public resetAuthCode(): void
```

##### `resetAuthCodeWo` <a name="resetAuthCodeWo" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.resetAuthCodeWo"></a>

```typescript
public resetAuthCodeWo(): void
```

##### `resetAuthCodeWoVersion` <a name="resetAuthCodeWoVersion" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.resetAuthCodeWoVersion"></a>

```typescript
public resetAuthCodeWoVersion(): void
```

##### `resetConversationProfileId` <a name="resetConversationProfileId" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.resetConversationProfileId"></a>

```typescript
public resetConversationProfileId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.property.authCodeInput">authCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.property.authCodeWoInput">authCodeWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.property.authCodeWoVersionInput">authCodeWoVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.property.conversationProfileIdInput">conversationProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.property.authCode">authCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.property.authCodeWo">authCodeWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.property.authCodeWoVersion">authCodeWoVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.property.conversationProfileId">conversationProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentials">GoogleCesDeploymentInstagramCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authCodeInput`<sup>Optional</sup> <a name="authCodeInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.property.authCodeInput"></a>

```typescript
public readonly authCodeInput: string;
```

- *Type:* string

---

##### `authCodeWoInput`<sup>Optional</sup> <a name="authCodeWoInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.property.authCodeWoInput"></a>

```typescript
public readonly authCodeWoInput: string;
```

- *Type:* string

---

##### `authCodeWoVersionInput`<sup>Optional</sup> <a name="authCodeWoVersionInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.property.authCodeWoVersionInput"></a>

```typescript
public readonly authCodeWoVersionInput: string;
```

- *Type:* string

---

##### `conversationProfileIdInput`<sup>Optional</sup> <a name="conversationProfileIdInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.property.conversationProfileIdInput"></a>

```typescript
public readonly conversationProfileIdInput: string;
```

- *Type:* string

---

##### `authCode`<sup>Required</sup> <a name="authCode" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.property.authCode"></a>

```typescript
public readonly authCode: string;
```

- *Type:* string

---

##### ~~`authCodeWo`~~<sup>Required</sup> <a name="authCodeWo" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.property.authCodeWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```typescript
public readonly authCodeWo: string;
```

- *Type:* string

---

##### `authCodeWoVersion`<sup>Required</sup> <a name="authCodeWoVersion" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.property.authCodeWoVersion"></a>

```typescript
public readonly authCodeWoVersion: string;
```

- *Type:* string

---

##### `conversationProfileId`<sup>Required</sup> <a name="conversationProfileId" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.property.conversationProfileId"></a>

```typescript
public readonly conversationProfileId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesDeploymentInstagramCredentials;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentInstagramCredentials">GoogleCesDeploymentInstagramCredentials</a>

---


### GoogleCesDeploymentTimeoutsOutputReference <a name="GoogleCesDeploymentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleCesDeployment } from '@cdktn/provider-google-beta'

new googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeouts">GoogleCesDeploymentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCesDeploymentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentTimeouts">GoogleCesDeploymentTimeouts</a>

---


### GoogleCesDeploymentWhatsappCredentialsOutputReference <a name="GoogleCesDeploymentWhatsappCredentialsOutputReference" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.Initializer"></a>

```typescript
import { googleCesDeployment } from '@cdktn/provider-google-beta'

new googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.resetAuthCode">resetAuthCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.resetAuthCodeWo">resetAuthCodeWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.resetAuthCodeWoVersion">resetAuthCodeWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.resetConversationProfileId">resetConversationProfileId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.resetPin">resetPin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.resetPinWo">resetPinWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.resetPinWoVersion">resetPinWoVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthCode` <a name="resetAuthCode" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.resetAuthCode"></a>

```typescript
public resetAuthCode(): void
```

##### `resetAuthCodeWo` <a name="resetAuthCodeWo" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.resetAuthCodeWo"></a>

```typescript
public resetAuthCodeWo(): void
```

##### `resetAuthCodeWoVersion` <a name="resetAuthCodeWoVersion" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.resetAuthCodeWoVersion"></a>

```typescript
public resetAuthCodeWoVersion(): void
```

##### `resetConversationProfileId` <a name="resetConversationProfileId" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.resetConversationProfileId"></a>

```typescript
public resetConversationProfileId(): void
```

##### `resetPin` <a name="resetPin" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.resetPin"></a>

```typescript
public resetPin(): void
```

##### `resetPinWo` <a name="resetPinWo" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.resetPinWo"></a>

```typescript
public resetPinWo(): void
```

##### `resetPinWoVersion` <a name="resetPinWoVersion" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.resetPinWoVersion"></a>

```typescript
public resetPinWoVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.property.authCodeInput">authCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.property.authCodeWoInput">authCodeWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.property.authCodeWoVersionInput">authCodeWoVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.property.businessAccountIdInput">businessAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.property.conversationProfileIdInput">conversationProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.property.phoneNumberInput">phoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.property.pinInput">pinInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.property.pinWoInput">pinWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.property.pinWoVersionInput">pinWoVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.property.wabaIdInput">wabaIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.property.authCode">authCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.property.authCodeWo">authCodeWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.property.authCodeWoVersion">authCodeWoVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.property.businessAccountId">businessAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.property.conversationProfileId">conversationProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.property.pin">pin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.property.pinWo">pinWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.property.pinWoVersion">pinWoVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.property.wabaId">wabaId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentials">GoogleCesDeploymentWhatsappCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authCodeInput`<sup>Optional</sup> <a name="authCodeInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.property.authCodeInput"></a>

```typescript
public readonly authCodeInput: string;
```

- *Type:* string

---

##### `authCodeWoInput`<sup>Optional</sup> <a name="authCodeWoInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.property.authCodeWoInput"></a>

```typescript
public readonly authCodeWoInput: string;
```

- *Type:* string

---

##### `authCodeWoVersionInput`<sup>Optional</sup> <a name="authCodeWoVersionInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.property.authCodeWoVersionInput"></a>

```typescript
public readonly authCodeWoVersionInput: string;
```

- *Type:* string

---

##### `businessAccountIdInput`<sup>Optional</sup> <a name="businessAccountIdInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.property.businessAccountIdInput"></a>

```typescript
public readonly businessAccountIdInput: string;
```

- *Type:* string

---

##### `conversationProfileIdInput`<sup>Optional</sup> <a name="conversationProfileIdInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.property.conversationProfileIdInput"></a>

```typescript
public readonly conversationProfileIdInput: string;
```

- *Type:* string

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.property.phoneNumberInput"></a>

```typescript
public readonly phoneNumberInput: string;
```

- *Type:* string

---

##### `pinInput`<sup>Optional</sup> <a name="pinInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.property.pinInput"></a>

```typescript
public readonly pinInput: string;
```

- *Type:* string

---

##### `pinWoInput`<sup>Optional</sup> <a name="pinWoInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.property.pinWoInput"></a>

```typescript
public readonly pinWoInput: string;
```

- *Type:* string

---

##### `pinWoVersionInput`<sup>Optional</sup> <a name="pinWoVersionInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.property.pinWoVersionInput"></a>

```typescript
public readonly pinWoVersionInput: string;
```

- *Type:* string

---

##### `wabaIdInput`<sup>Optional</sup> <a name="wabaIdInput" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.property.wabaIdInput"></a>

```typescript
public readonly wabaIdInput: string;
```

- *Type:* string

---

##### `authCode`<sup>Required</sup> <a name="authCode" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.property.authCode"></a>

```typescript
public readonly authCode: string;
```

- *Type:* string

---

##### ~~`authCodeWo`~~<sup>Required</sup> <a name="authCodeWo" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.property.authCodeWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```typescript
public readonly authCodeWo: string;
```

- *Type:* string

---

##### `authCodeWoVersion`<sup>Required</sup> <a name="authCodeWoVersion" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.property.authCodeWoVersion"></a>

```typescript
public readonly authCodeWoVersion: string;
```

- *Type:* string

---

##### `businessAccountId`<sup>Required</sup> <a name="businessAccountId" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.property.businessAccountId"></a>

```typescript
public readonly businessAccountId: string;
```

- *Type:* string

---

##### `conversationProfileId`<sup>Required</sup> <a name="conversationProfileId" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.property.conversationProfileId"></a>

```typescript
public readonly conversationProfileId: string;
```

- *Type:* string

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

---

##### `pin`<sup>Required</sup> <a name="pin" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.property.pin"></a>

```typescript
public readonly pin: string;
```

- *Type:* string

---

##### ~~`pinWo`~~<sup>Required</sup> <a name="pinWo" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.property.pinWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```typescript
public readonly pinWo: string;
```

- *Type:* string

---

##### `pinWoVersion`<sup>Required</sup> <a name="pinWoVersion" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.property.pinWoVersion"></a>

```typescript
public readonly pinWoVersion: string;
```

- *Type:* string

---

##### `wabaId`<sup>Required</sup> <a name="wabaId" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.property.wabaId"></a>

```typescript
public readonly wabaId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesDeploymentWhatsappCredentials;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesDeployment.GoogleCesDeploymentWhatsappCredentials">GoogleCesDeploymentWhatsappCredentials</a>

---



