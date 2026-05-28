# `googleAppEngineServiceNetworkSettings` Submodule <a name="`googleAppEngineServiceNetworkSettings` Submodule" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAppEngineServiceNetworkSettings <a name="GoogleAppEngineServiceNetworkSettings" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_app_engine_service_network_settings google_app_engine_service_network_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.Initializer"></a>

```typescript
import { googleAppEngineServiceNetworkSettings } from '@cdktn/provider-google-beta'

new googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings(scope: Construct, id: string, config: GoogleAppEngineServiceNetworkSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig">GoogleAppEngineServiceNetworkSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig">GoogleAppEngineServiceNetworkSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.putNetworkSettings">putNetworkSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNetworkSettings` <a name="putNetworkSettings" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.putNetworkSettings"></a>

```typescript
public putNetworkSettings(value: GoogleAppEngineServiceNetworkSettingsNetworkSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.putNetworkSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettings">GoogleAppEngineServiceNetworkSettingsNetworkSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleAppEngineServiceNetworkSettingsTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeouts">GoogleAppEngineServiceNetworkSettingsTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleAppEngineServiceNetworkSettings resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.isConstruct"></a>

```typescript
import { googleAppEngineServiceNetworkSettings } from '@cdktn/provider-google-beta'

googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.isTerraformElement"></a>

```typescript
import { googleAppEngineServiceNetworkSettings } from '@cdktn/provider-google-beta'

googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.isTerraformResource"></a>

```typescript
import { googleAppEngineServiceNetworkSettings } from '@cdktn/provider-google-beta'

googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.generateConfigForImport"></a>

```typescript
import { googleAppEngineServiceNetworkSettings } from '@cdktn/provider-google-beta'

googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleAppEngineServiceNetworkSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleAppEngineServiceNetworkSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleAppEngineServiceNetworkSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_app_engine_service_network_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleAppEngineServiceNetworkSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.networkSettings">networkSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference">GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference">GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.networkSettingsInput">networkSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettings">GoogleAppEngineServiceNetworkSettingsNetworkSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeouts">GoogleAppEngineServiceNetworkSettingsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.service">service</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `networkSettings`<sup>Required</sup> <a name="networkSettings" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.networkSettings"></a>

```typescript
public readonly networkSettings: GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference">GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference">GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `networkSettingsInput`<sup>Optional</sup> <a name="networkSettingsInput" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.networkSettingsInput"></a>

```typescript
public readonly networkSettingsInput: GoogleAppEngineServiceNetworkSettingsNetworkSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettings">GoogleAppEngineServiceNetworkSettingsNetworkSettings</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleAppEngineServiceNetworkSettingsTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeouts">GoogleAppEngineServiceNetworkSettingsTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAppEngineServiceNetworkSettingsConfig <a name="GoogleAppEngineServiceNetworkSettingsConfig" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.Initializer"></a>

```typescript
import { googleAppEngineServiceNetworkSettings } from '@cdktn/provider-google-beta'

const googleAppEngineServiceNetworkSettingsConfig: googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.networkSettings">networkSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettings">GoogleAppEngineServiceNetworkSettingsNetworkSettings</a></code> | network_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.service">service</a></code> | <code>string</code> | The name of the service these settings apply to. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_app_engine_service_network_settings#id GoogleAppEngineServiceNetworkSettings#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_app_engine_service_network_settings#project GoogleAppEngineServiceNetworkSettings#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeouts">GoogleAppEngineServiceNetworkSettingsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `networkSettings`<sup>Required</sup> <a name="networkSettings" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.networkSettings"></a>

```typescript
public readonly networkSettings: GoogleAppEngineServiceNetworkSettingsNetworkSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettings">GoogleAppEngineServiceNetworkSettingsNetworkSettings</a>

network_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_app_engine_service_network_settings#network_settings GoogleAppEngineServiceNetworkSettings#network_settings}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

The name of the service these settings apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_app_engine_service_network_settings#service GoogleAppEngineServiceNetworkSettings#service}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_app_engine_service_network_settings#id GoogleAppEngineServiceNetworkSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_app_engine_service_network_settings#project GoogleAppEngineServiceNetworkSettings#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleAppEngineServiceNetworkSettingsTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeouts">GoogleAppEngineServiceNetworkSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_app_engine_service_network_settings#timeouts GoogleAppEngineServiceNetworkSettings#timeouts}

---

### GoogleAppEngineServiceNetworkSettingsNetworkSettings <a name="GoogleAppEngineServiceNetworkSettingsNetworkSettings" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettings.Initializer"></a>

```typescript
import { googleAppEngineServiceNetworkSettings } from '@cdktn/provider-google-beta'

const googleAppEngineServiceNetworkSettingsNetworkSettings: googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettings.property.ingressTrafficAllowed">ingressTrafficAllowed</a></code> | <code>string</code> | The ingress settings for version or service. Default value: "INGRESS_TRAFFIC_ALLOWED_UNSPECIFIED" Possible values: ["INGRESS_TRAFFIC_ALLOWED_UNSPECIFIED", "INGRESS_TRAFFIC_ALLOWED_ALL", "INGRESS_TRAFFIC_ALLOWED_INTERNAL_ONLY", "INGRESS_TRAFFIC_ALLOWED_INTERNAL_AND_LB"]. |

---

##### `ingressTrafficAllowed`<sup>Optional</sup> <a name="ingressTrafficAllowed" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettings.property.ingressTrafficAllowed"></a>

```typescript
public readonly ingressTrafficAllowed: string;
```

- *Type:* string

The ingress settings for version or service. Default value: "INGRESS_TRAFFIC_ALLOWED_UNSPECIFIED" Possible values: ["INGRESS_TRAFFIC_ALLOWED_UNSPECIFIED", "INGRESS_TRAFFIC_ALLOWED_ALL", "INGRESS_TRAFFIC_ALLOWED_INTERNAL_ONLY", "INGRESS_TRAFFIC_ALLOWED_INTERNAL_AND_LB"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_app_engine_service_network_settings#ingress_traffic_allowed GoogleAppEngineServiceNetworkSettings#ingress_traffic_allowed}

---

### GoogleAppEngineServiceNetworkSettingsTimeouts <a name="GoogleAppEngineServiceNetworkSettingsTimeouts" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeouts.Initializer"></a>

```typescript
import { googleAppEngineServiceNetworkSettings } from '@cdktn/provider-google-beta'

const googleAppEngineServiceNetworkSettingsTimeouts: googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_app_engine_service_network_settings#create GoogleAppEngineServiceNetworkSettings#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_app_engine_service_network_settings#delete GoogleAppEngineServiceNetworkSettings#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_app_engine_service_network_settings#update GoogleAppEngineServiceNetworkSettings#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_app_engine_service_network_settings#create GoogleAppEngineServiceNetworkSettings#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_app_engine_service_network_settings#delete GoogleAppEngineServiceNetworkSettings#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_app_engine_service_network_settings#update GoogleAppEngineServiceNetworkSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference <a name="GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.Initializer"></a>

```typescript
import { googleAppEngineServiceNetworkSettings } from '@cdktn/provider-google-beta'

new googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.resetIngressTrafficAllowed">resetIngressTrafficAllowed</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIngressTrafficAllowed` <a name="resetIngressTrafficAllowed" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.resetIngressTrafficAllowed"></a>

```typescript
public resetIngressTrafficAllowed(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.ingressTrafficAllowedInput">ingressTrafficAllowedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.ingressTrafficAllowed">ingressTrafficAllowed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettings">GoogleAppEngineServiceNetworkSettingsNetworkSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ingressTrafficAllowedInput`<sup>Optional</sup> <a name="ingressTrafficAllowedInput" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.ingressTrafficAllowedInput"></a>

```typescript
public readonly ingressTrafficAllowedInput: string;
```

- *Type:* string

---

##### `ingressTrafficAllowed`<sup>Required</sup> <a name="ingressTrafficAllowed" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.ingressTrafficAllowed"></a>

```typescript
public readonly ingressTrafficAllowed: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAppEngineServiceNetworkSettingsNetworkSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsNetworkSettings">GoogleAppEngineServiceNetworkSettingsNetworkSettings</a>

---


### GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference <a name="GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleAppEngineServiceNetworkSettings } from '@cdktn/provider-google-beta'

new googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeouts">GoogleAppEngineServiceNetworkSettingsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAppEngineServiceNetworkSettingsTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleAppEngineServiceNetworkSettings.GoogleAppEngineServiceNetworkSettingsTimeouts">GoogleAppEngineServiceNetworkSettingsTimeouts</a>

---



