# `googleSiteVerificationWebResource` Submodule <a name="`googleSiteVerificationWebResource` Submodule" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSiteVerificationWebResource <a name="GoogleSiteVerificationWebResource" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_site_verification_web_resource google_site_verification_web_resource}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.Initializer"></a>

```typescript
import { googleSiteVerificationWebResource } from '@cdktn/provider-google-beta'

new googleSiteVerificationWebResource.GoogleSiteVerificationWebResource(scope: Construct, id: string, config: GoogleSiteVerificationWebResourceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceConfig">GoogleSiteVerificationWebResourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceConfig">GoogleSiteVerificationWebResourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.putSite">putSite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSite` <a name="putSite" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.putSite"></a>

```typescript
public putSite(value: GoogleSiteVerificationWebResourceSite): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.putSite.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSite">GoogleSiteVerificationWebResourceSite</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleSiteVerificationWebResourceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeouts">GoogleSiteVerificationWebResourceTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleSiteVerificationWebResource resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.isConstruct"></a>

```typescript
import { googleSiteVerificationWebResource } from '@cdktn/provider-google-beta'

googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.isTerraformElement"></a>

```typescript
import { googleSiteVerificationWebResource } from '@cdktn/provider-google-beta'

googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.isTerraformResource"></a>

```typescript
import { googleSiteVerificationWebResource } from '@cdktn/provider-google-beta'

googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.generateConfigForImport"></a>

```typescript
import { googleSiteVerificationWebResource } from '@cdktn/provider-google-beta'

googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleSiteVerificationWebResource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleSiteVerificationWebResource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleSiteVerificationWebResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_site_verification_web_resource#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleSiteVerificationWebResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.property.owners">owners</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.property.site">site</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference">GoogleSiteVerificationWebResourceSiteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference">GoogleSiteVerificationWebResourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.property.webResourceId">webResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.property.siteInput">siteInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSite">GoogleSiteVerificationWebResourceSite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeouts">GoogleSiteVerificationWebResourceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.property.verificationMethodInput">verificationMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.property.verificationMethod">verificationMethod</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `owners`<sup>Required</sup> <a name="owners" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.property.owners"></a>

```typescript
public readonly owners: string[];
```

- *Type:* string[]

---

##### `site`<sup>Required</sup> <a name="site" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.property.site"></a>

```typescript
public readonly site: GoogleSiteVerificationWebResourceSiteOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference">GoogleSiteVerificationWebResourceSiteOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleSiteVerificationWebResourceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference">GoogleSiteVerificationWebResourceTimeoutsOutputReference</a>

---

##### `webResourceId`<sup>Required</sup> <a name="webResourceId" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.property.webResourceId"></a>

```typescript
public readonly webResourceId: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `siteInput`<sup>Optional</sup> <a name="siteInput" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.property.siteInput"></a>

```typescript
public readonly siteInput: GoogleSiteVerificationWebResourceSite;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSite">GoogleSiteVerificationWebResourceSite</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleSiteVerificationWebResourceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeouts">GoogleSiteVerificationWebResourceTimeouts</a>

---

##### `verificationMethodInput`<sup>Optional</sup> <a name="verificationMethodInput" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.property.verificationMethodInput"></a>

```typescript
public readonly verificationMethodInput: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `verificationMethod`<sup>Required</sup> <a name="verificationMethod" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.property.verificationMethod"></a>

```typescript
public readonly verificationMethod: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResource.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSiteVerificationWebResourceConfig <a name="GoogleSiteVerificationWebResourceConfig" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceConfig.Initializer"></a>

```typescript
import { googleSiteVerificationWebResource } from '@cdktn/provider-google-beta'

const googleSiteVerificationWebResourceConfig: googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceConfig.property.site">site</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSite">GoogleSiteVerificationWebResourceSite</a></code> | site block. |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceConfig.property.verificationMethod">verificationMethod</a></code> | <code>string</code> | The verification method for the Site Verification system to use to verify this site or domain. |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_site_verification_web_resource#id GoogleSiteVerificationWebResource#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeouts">GoogleSiteVerificationWebResourceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `site`<sup>Required</sup> <a name="site" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceConfig.property.site"></a>

```typescript
public readonly site: GoogleSiteVerificationWebResourceSite;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSite">GoogleSiteVerificationWebResourceSite</a>

site block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_site_verification_web_resource#site GoogleSiteVerificationWebResource#site}

---

##### `verificationMethod`<sup>Required</sup> <a name="verificationMethod" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceConfig.property.verificationMethod"></a>

```typescript
public readonly verificationMethod: string;
```

- *Type:* string

The verification method for the Site Verification system to use to verify this site or domain.

Possible values: ["ANALYTICS", "DNS_CNAME", "DNS_TXT", "FILE", "META", "TAG_MANAGER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_site_verification_web_resource#verification_method GoogleSiteVerificationWebResource#verification_method}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_site_verification_web_resource#deletion_policy GoogleSiteVerificationWebResource#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_site_verification_web_resource#id GoogleSiteVerificationWebResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleSiteVerificationWebResourceTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeouts">GoogleSiteVerificationWebResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_site_verification_web_resource#timeouts GoogleSiteVerificationWebResource#timeouts}

---

### GoogleSiteVerificationWebResourceSite <a name="GoogleSiteVerificationWebResourceSite" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSite"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSite.Initializer"></a>

```typescript
import { googleSiteVerificationWebResource } from '@cdktn/provider-google-beta'

const googleSiteVerificationWebResourceSite: googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSite = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSite.property.identifier">identifier</a></code> | <code>string</code> | The site identifier. |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSite.property.type">type</a></code> | <code>string</code> | The type of resource to be verified. Possible values: ["INET_DOMAIN", "SITE"]. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSite.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The site identifier.

If the type is set to SITE, the identifier is a URL. If the type is
set to INET_DOMAIN, the identifier is a domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_site_verification_web_resource#identifier GoogleSiteVerificationWebResource#identifier}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSite.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of resource to be verified. Possible values: ["INET_DOMAIN", "SITE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_site_verification_web_resource#type GoogleSiteVerificationWebResource#type}

---

### GoogleSiteVerificationWebResourceTimeouts <a name="GoogleSiteVerificationWebResourceTimeouts" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeouts.Initializer"></a>

```typescript
import { googleSiteVerificationWebResource } from '@cdktn/provider-google-beta'

const googleSiteVerificationWebResourceTimeouts: googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_site_verification_web_resource#create GoogleSiteVerificationWebResource#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_site_verification_web_resource#delete GoogleSiteVerificationWebResource#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_site_verification_web_resource#create GoogleSiteVerificationWebResource#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_site_verification_web_resource#delete GoogleSiteVerificationWebResource#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSiteVerificationWebResourceSiteOutputReference <a name="GoogleSiteVerificationWebResourceSiteOutputReference" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference.Initializer"></a>

```typescript
import { googleSiteVerificationWebResource } from '@cdktn/provider-google-beta'

new googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference.property.identifierInput">identifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSite">GoogleSiteVerificationWebResourceSite</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference.property.identifierInput"></a>

```typescript
public readonly identifierInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSiteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleSiteVerificationWebResourceSite;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceSite">GoogleSiteVerificationWebResourceSite</a>

---


### GoogleSiteVerificationWebResourceTimeoutsOutputReference <a name="GoogleSiteVerificationWebResourceTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleSiteVerificationWebResource } from '@cdktn/provider-google-beta'

new googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeouts">GoogleSiteVerificationWebResourceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleSiteVerificationWebResourceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSiteVerificationWebResource.GoogleSiteVerificationWebResourceTimeouts">GoogleSiteVerificationWebResourceTimeouts</a>

---



