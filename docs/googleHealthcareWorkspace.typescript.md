# `googleHealthcareWorkspace` Submodule <a name="`googleHealthcareWorkspace` Submodule" id="@cdktn/provider-google-beta.googleHealthcareWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleHealthcareWorkspace <a name="GoogleHealthcareWorkspace" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_healthcare_workspace google_healthcare_workspace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.Initializer"></a>

```typescript
import { googleHealthcareWorkspace } from '@cdktn/provider-google-beta'

new googleHealthcareWorkspace.GoogleHealthcareWorkspace(scope: Construct, id: string, config: GoogleHealthcareWorkspaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceConfig">GoogleHealthcareWorkspaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceConfig">GoogleHealthcareWorkspaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSettings` <a name="putSettings" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.putSettings"></a>

```typescript
public putSettings(value: GoogleHealthcareWorkspaceSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettings">GoogleHealthcareWorkspaceSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleHealthcareWorkspaceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeouts">GoogleHealthcareWorkspaceTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleHealthcareWorkspace resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.isConstruct"></a>

```typescript
import { googleHealthcareWorkspace } from '@cdktn/provider-google-beta'

googleHealthcareWorkspace.GoogleHealthcareWorkspace.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.isTerraformElement"></a>

```typescript
import { googleHealthcareWorkspace } from '@cdktn/provider-google-beta'

googleHealthcareWorkspace.GoogleHealthcareWorkspace.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.isTerraformResource"></a>

```typescript
import { googleHealthcareWorkspace } from '@cdktn/provider-google-beta'

googleHealthcareWorkspace.GoogleHealthcareWorkspace.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.generateConfigForImport"></a>

```typescript
import { googleHealthcareWorkspace } from '@cdktn/provider-google-beta'

googleHealthcareWorkspace.GoogleHealthcareWorkspace.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleHealthcareWorkspace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleHealthcareWorkspace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleHealthcareWorkspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_healthcare_workspace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleHealthcareWorkspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettingsOutputReference">GoogleHealthcareWorkspaceSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference">GoogleHealthcareWorkspaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.datasetInput">datasetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.settingsInput">settingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettings">GoogleHealthcareWorkspaceSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeouts">GoogleHealthcareWorkspaceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.dataset">dataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.settings"></a>

```typescript
public readonly settings: GoogleHealthcareWorkspaceSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettingsOutputReference">GoogleHealthcareWorkspaceSettingsOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleHealthcareWorkspaceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference">GoogleHealthcareWorkspaceTimeoutsOutputReference</a>

---

##### `datasetInput`<sup>Optional</sup> <a name="datasetInput" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.datasetInput"></a>

```typescript
public readonly datasetInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.settingsInput"></a>

```typescript
public readonly settingsInput: GoogleHealthcareWorkspaceSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettings">GoogleHealthcareWorkspaceSettings</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleHealthcareWorkspaceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeouts">GoogleHealthcareWorkspaceTimeouts</a>

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.dataset"></a>

```typescript
public readonly dataset: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspace.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleHealthcareWorkspaceConfig <a name="GoogleHealthcareWorkspaceConfig" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceConfig.Initializer"></a>

```typescript
import { googleHealthcareWorkspace } from '@cdktn/provider-google-beta'

const googleHealthcareWorkspaceConfig: googleHealthcareWorkspace.GoogleHealthcareWorkspaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceConfig.property.dataset">dataset</a></code> | <code>string</code> | Identifies the dataset addressed by this request. Must be in the format 'projects/{project}/locations/{location}/datasets/{dataset}'. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceConfig.property.name">name</a></code> | <code>string</code> | The name of the workspace, in the format 'projects/{projectId}/locations/{location}/datasets/{datasetId}/dataMapperWorkspaces/{workspaceId}'. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceConfig.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettings">GoogleHealthcareWorkspaceSettings</a></code> | settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_healthcare_workspace#id GoogleHealthcareWorkspace#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | The user labels. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeouts">GoogleHealthcareWorkspaceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceConfig.property.dataset"></a>

```typescript
public readonly dataset: string;
```

- *Type:* string

Identifies the dataset addressed by this request. Must be in the format 'projects/{project}/locations/{location}/datasets/{dataset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_healthcare_workspace#dataset GoogleHealthcareWorkspace#dataset}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the workspace, in the format 'projects/{projectId}/locations/{location}/datasets/{datasetId}/dataMapperWorkspaces/{workspaceId}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_healthcare_workspace#name GoogleHealthcareWorkspace#name}

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceConfig.property.settings"></a>

```typescript
public readonly settings: GoogleHealthcareWorkspaceSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettings">GoogleHealthcareWorkspaceSettings</a>

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_healthcare_workspace#settings GoogleHealthcareWorkspace#settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_healthcare_workspace#id GoogleHealthcareWorkspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The user labels.

An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }


**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_healthcare_workspace#labels GoogleHealthcareWorkspace#labels}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleHealthcareWorkspaceTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeouts">GoogleHealthcareWorkspaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_healthcare_workspace#timeouts GoogleHealthcareWorkspace#timeouts}

---

### GoogleHealthcareWorkspaceSettings <a name="GoogleHealthcareWorkspaceSettings" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettings.Initializer"></a>

```typescript
import { googleHealthcareWorkspace } from '@cdktn/provider-google-beta'

const googleHealthcareWorkspaceSettings: googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettings.property.dataProjectIds">dataProjectIds</a></code> | <code>string[]</code> | Project IDs for data projects hosted in a workspace. |

---

##### `dataProjectIds`<sup>Required</sup> <a name="dataProjectIds" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettings.property.dataProjectIds"></a>

```typescript
public readonly dataProjectIds: string[];
```

- *Type:* string[]

Project IDs for data projects hosted in a workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_healthcare_workspace#data_project_ids GoogleHealthcareWorkspace#data_project_ids}

---

### GoogleHealthcareWorkspaceTimeouts <a name="GoogleHealthcareWorkspaceTimeouts" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeouts.Initializer"></a>

```typescript
import { googleHealthcareWorkspace } from '@cdktn/provider-google-beta'

const googleHealthcareWorkspaceTimeouts: googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_healthcare_workspace#create GoogleHealthcareWorkspace#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_healthcare_workspace#delete GoogleHealthcareWorkspace#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_healthcare_workspace#update GoogleHealthcareWorkspace#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_healthcare_workspace#create GoogleHealthcareWorkspace#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_healthcare_workspace#delete GoogleHealthcareWorkspace#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_healthcare_workspace#update GoogleHealthcareWorkspace#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleHealthcareWorkspaceSettingsOutputReference <a name="GoogleHealthcareWorkspaceSettingsOutputReference" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettingsOutputReference.Initializer"></a>

```typescript
import { googleHealthcareWorkspace } from '@cdktn/provider-google-beta'

new googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettingsOutputReference.property.dataProjectIdsInput">dataProjectIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettingsOutputReference.property.dataProjectIds">dataProjectIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettings">GoogleHealthcareWorkspaceSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataProjectIdsInput`<sup>Optional</sup> <a name="dataProjectIdsInput" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettingsOutputReference.property.dataProjectIdsInput"></a>

```typescript
public readonly dataProjectIdsInput: string[];
```

- *Type:* string[]

---

##### `dataProjectIds`<sup>Required</sup> <a name="dataProjectIds" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettingsOutputReference.property.dataProjectIds"></a>

```typescript
public readonly dataProjectIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleHealthcareWorkspaceSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceSettings">GoogleHealthcareWorkspaceSettings</a>

---


### GoogleHealthcareWorkspaceTimeoutsOutputReference <a name="GoogleHealthcareWorkspaceTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleHealthcareWorkspace } from '@cdktn/provider-google-beta'

new googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeouts">GoogleHealthcareWorkspaceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleHealthcareWorkspaceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleHealthcareWorkspace.GoogleHealthcareWorkspaceTimeouts">GoogleHealthcareWorkspaceTimeouts</a>

---



