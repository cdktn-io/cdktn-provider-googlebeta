# `googleSourcerepoRepository` Submodule <a name="`googleSourcerepoRepository` Submodule" id="@cdktn/provider-google-beta.googleSourcerepoRepository"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSourcerepoRepository <a name="GoogleSourcerepoRepository" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_sourcerepo_repository google_sourcerepo_repository}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.Initializer"></a>

```typescript
import { googleSourcerepoRepository } from '@cdktn/provider-google-beta'

new googleSourcerepoRepository.GoogleSourcerepoRepository(scope: Construct, id: string, config: GoogleSourcerepoRepositoryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig">GoogleSourcerepoRepositoryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig">GoogleSourcerepoRepositoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.putPubsubConfigs">putPubsubConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.resetCreateIgnoreAlreadyExists">resetCreateIgnoreAlreadyExists</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.resetPubsubConfigs">resetPubsubConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPubsubConfigs` <a name="putPubsubConfigs" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.putPubsubConfigs"></a>

```typescript
public putPubsubConfigs(value: IResolvable | GoogleSourcerepoRepositoryPubsubConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.putPubsubConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigs">GoogleSourcerepoRepositoryPubsubConfigs</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleSourcerepoRepositoryTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeouts">GoogleSourcerepoRepositoryTimeouts</a>

---

##### `resetCreateIgnoreAlreadyExists` <a name="resetCreateIgnoreAlreadyExists" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.resetCreateIgnoreAlreadyExists"></a>

```typescript
public resetCreateIgnoreAlreadyExists(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetPubsubConfigs` <a name="resetPubsubConfigs" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.resetPubsubConfigs"></a>

```typescript
public resetPubsubConfigs(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleSourcerepoRepository resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.isConstruct"></a>

```typescript
import { googleSourcerepoRepository } from '@cdktn/provider-google-beta'

googleSourcerepoRepository.GoogleSourcerepoRepository.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.isTerraformElement"></a>

```typescript
import { googleSourcerepoRepository } from '@cdktn/provider-google-beta'

googleSourcerepoRepository.GoogleSourcerepoRepository.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.isTerraformResource"></a>

```typescript
import { googleSourcerepoRepository } from '@cdktn/provider-google-beta'

googleSourcerepoRepository.GoogleSourcerepoRepository.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.generateConfigForImport"></a>

```typescript
import { googleSourcerepoRepository } from '@cdktn/provider-google-beta'

googleSourcerepoRepository.GoogleSourcerepoRepository.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleSourcerepoRepository resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleSourcerepoRepository to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleSourcerepoRepository that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_sourcerepo_repository#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleSourcerepoRepository to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.pubsubConfigs">pubsubConfigs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList">GoogleSourcerepoRepositoryPubsubConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference">GoogleSourcerepoRepositoryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.createIgnoreAlreadyExistsInput">createIgnoreAlreadyExistsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.pubsubConfigsInput">pubsubConfigsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigs">GoogleSourcerepoRepositoryPubsubConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeouts">GoogleSourcerepoRepositoryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.createIgnoreAlreadyExists">createIgnoreAlreadyExists</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `pubsubConfigs`<sup>Required</sup> <a name="pubsubConfigs" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.pubsubConfigs"></a>

```typescript
public readonly pubsubConfigs: GoogleSourcerepoRepositoryPubsubConfigsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList">GoogleSourcerepoRepositoryPubsubConfigsList</a>

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleSourcerepoRepositoryTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference">GoogleSourcerepoRepositoryTimeoutsOutputReference</a>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `createIgnoreAlreadyExistsInput`<sup>Optional</sup> <a name="createIgnoreAlreadyExistsInput" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.createIgnoreAlreadyExistsInput"></a>

```typescript
public readonly createIgnoreAlreadyExistsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `pubsubConfigsInput`<sup>Optional</sup> <a name="pubsubConfigsInput" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.pubsubConfigsInput"></a>

```typescript
public readonly pubsubConfigsInput: IResolvable | GoogleSourcerepoRepositoryPubsubConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigs">GoogleSourcerepoRepositoryPubsubConfigs</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleSourcerepoRepositoryTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeouts">GoogleSourcerepoRepositoryTimeouts</a>

---

##### `createIgnoreAlreadyExists`<sup>Required</sup> <a name="createIgnoreAlreadyExists" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.createIgnoreAlreadyExists"></a>

```typescript
public readonly createIgnoreAlreadyExists: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepository.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSourcerepoRepositoryConfig <a name="GoogleSourcerepoRepositoryConfig" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.Initializer"></a>

```typescript
import { googleSourcerepoRepository } from '@cdktn/provider-google-beta'

const googleSourcerepoRepositoryConfig: googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.name">name</a></code> | <code>string</code> | Resource name of the repository, of the form '{{repo}}'. The repo name may contain slashes. eg, 'name/with/slash'. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.createIgnoreAlreadyExists">createIgnoreAlreadyExists</a></code> | <code>boolean \| cdktn.IResolvable</code> | If set to true, skip repository creation if a repository with the same name already exists. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_sourcerepo_repository#id GoogleSourcerepoRepository#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_sourcerepo_repository#project GoogleSourcerepoRepository#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.pubsubConfigs">pubsubConfigs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigs">GoogleSourcerepoRepositoryPubsubConfigs</a>[]</code> | pubsub_configs block. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeouts">GoogleSourcerepoRepositoryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Resource name of the repository, of the form '{{repo}}'. The repo name may contain slashes. eg, 'name/with/slash'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_sourcerepo_repository#name GoogleSourcerepoRepository#name}

---

##### `createIgnoreAlreadyExists`<sup>Optional</sup> <a name="createIgnoreAlreadyExists" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.createIgnoreAlreadyExists"></a>

```typescript
public readonly createIgnoreAlreadyExists: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If set to true, skip repository creation if a repository with the same name already exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_sourcerepo_repository#create_ignore_already_exists GoogleSourcerepoRepository#create_ignore_already_exists}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_sourcerepo_repository#deletion_policy GoogleSourcerepoRepository#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_sourcerepo_repository#id GoogleSourcerepoRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_sourcerepo_repository#project GoogleSourcerepoRepository#project}.

---

##### `pubsubConfigs`<sup>Optional</sup> <a name="pubsubConfigs" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.pubsubConfigs"></a>

```typescript
public readonly pubsubConfigs: IResolvable | GoogleSourcerepoRepositoryPubsubConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigs">GoogleSourcerepoRepositoryPubsubConfigs</a>[]

pubsub_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_sourcerepo_repository#pubsub_configs GoogleSourcerepoRepository#pubsub_configs}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleSourcerepoRepositoryTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeouts">GoogleSourcerepoRepositoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_sourcerepo_repository#timeouts GoogleSourcerepoRepository#timeouts}

---

### GoogleSourcerepoRepositoryPubsubConfigs <a name="GoogleSourcerepoRepositoryPubsubConfigs" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigs.Initializer"></a>

```typescript
import { googleSourcerepoRepository } from '@cdktn/provider-google-beta'

const googleSourcerepoRepositoryPubsubConfigs: googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigs.property.messageFormat">messageFormat</a></code> | <code>string</code> | The format of the Cloud Pub/Sub messages. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigs.property.topic">topic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_sourcerepo_repository#topic GoogleSourcerepoRepository#topic}. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigs.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | Email address of the service account used for publishing Cloud Pub/Sub messages. |

---

##### `messageFormat`<sup>Required</sup> <a name="messageFormat" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigs.property.messageFormat"></a>

```typescript
public readonly messageFormat: string;
```

- *Type:* string

The format of the Cloud Pub/Sub messages.

PROTOBUF: The message payload is a serialized protocol buffer of SourceRepoEvent.
- JSON: The message payload is a JSON string of SourceRepoEvent. Possible values: ["PROTOBUF", "JSON"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_sourcerepo_repository#message_format GoogleSourcerepoRepository#message_format}

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigs.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_sourcerepo_repository#topic GoogleSourcerepoRepository#topic}.

---

##### `serviceAccountEmail`<sup>Optional</sup> <a name="serviceAccountEmail" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigs.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

Email address of the service account used for publishing Cloud Pub/Sub messages.

This service account needs to be in the same project as the PubsubConfig. When added,
the caller needs to have iam.serviceAccounts.actAs permission on this service account.
If unspecified, it defaults to the compute engine default service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_sourcerepo_repository#service_account_email GoogleSourcerepoRepository#service_account_email}

---

### GoogleSourcerepoRepositoryTimeouts <a name="GoogleSourcerepoRepositoryTimeouts" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeouts.Initializer"></a>

```typescript
import { googleSourcerepoRepository } from '@cdktn/provider-google-beta'

const googleSourcerepoRepositoryTimeouts: googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_sourcerepo_repository#create GoogleSourcerepoRepository#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_sourcerepo_repository#delete GoogleSourcerepoRepository#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_sourcerepo_repository#update GoogleSourcerepoRepository#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_sourcerepo_repository#create GoogleSourcerepoRepository#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_sourcerepo_repository#delete GoogleSourcerepoRepository#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_sourcerepo_repository#update GoogleSourcerepoRepository#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSourcerepoRepositoryPubsubConfigsList <a name="GoogleSourcerepoRepositoryPubsubConfigsList" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.Initializer"></a>

```typescript
import { googleSourcerepoRepository } from '@cdktn/provider-google-beta'

new googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.get"></a>

```typescript
public get(index: number): GoogleSourcerepoRepositoryPubsubConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigs">GoogleSourcerepoRepositoryPubsubConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleSourcerepoRepositoryPubsubConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigs">GoogleSourcerepoRepositoryPubsubConfigs</a>[]

---


### GoogleSourcerepoRepositoryPubsubConfigsOutputReference <a name="GoogleSourcerepoRepositoryPubsubConfigsOutputReference" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.Initializer"></a>

```typescript
import { googleSourcerepoRepository } from '@cdktn/provider-google-beta'

new googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.resetServiceAccountEmail">resetServiceAccountEmail</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServiceAccountEmail` <a name="resetServiceAccountEmail" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.resetServiceAccountEmail"></a>

```typescript
public resetServiceAccountEmail(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.messageFormatInput">messageFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.topicInput">topicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.messageFormat">messageFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.topic">topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigs">GoogleSourcerepoRepositoryPubsubConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `messageFormatInput`<sup>Optional</sup> <a name="messageFormatInput" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.messageFormatInput"></a>

```typescript
public readonly messageFormatInput: string;
```

- *Type:* string

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.serviceAccountEmailInput"></a>

```typescript
public readonly serviceAccountEmailInput: string;
```

- *Type:* string

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.topicInput"></a>

```typescript
public readonly topicInput: string;
```

- *Type:* string

---

##### `messageFormat`<sup>Required</sup> <a name="messageFormat" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.messageFormat"></a>

```typescript
public readonly messageFormat: string;
```

- *Type:* string

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleSourcerepoRepositoryPubsubConfigs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryPubsubConfigs">GoogleSourcerepoRepositoryPubsubConfigs</a>

---


### GoogleSourcerepoRepositoryTimeoutsOutputReference <a name="GoogleSourcerepoRepositoryTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleSourcerepoRepository } from '@cdktn/provider-google-beta'

new googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeouts">GoogleSourcerepoRepositoryTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleSourcerepoRepositoryTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSourcerepoRepository.GoogleSourcerepoRepositoryTimeouts">GoogleSourcerepoRepositoryTimeouts</a>

---



