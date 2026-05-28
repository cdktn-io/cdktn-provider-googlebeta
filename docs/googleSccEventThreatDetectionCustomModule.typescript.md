# `googleSccEventThreatDetectionCustomModule` Submodule <a name="`googleSccEventThreatDetectionCustomModule` Submodule" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSccEventThreatDetectionCustomModule <a name="GoogleSccEventThreatDetectionCustomModule" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_scc_event_threat_detection_custom_module google_scc_event_threat_detection_custom_module}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer"></a>

```typescript
import { googleSccEventThreatDetectionCustomModule } from '@cdktn/provider-google-beta'

new googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule(scope: Construct, id: string, config: GoogleSccEventThreatDetectionCustomModuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig">GoogleSccEventThreatDetectionCustomModuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig">GoogleSccEventThreatDetectionCustomModuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleSccEventThreatDetectionCustomModuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts">GoogleSccEventThreatDetectionCustomModuleTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleSccEventThreatDetectionCustomModule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.isConstruct"></a>

```typescript
import { googleSccEventThreatDetectionCustomModule } from '@cdktn/provider-google-beta'

googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.isTerraformElement"></a>

```typescript
import { googleSccEventThreatDetectionCustomModule } from '@cdktn/provider-google-beta'

googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.isTerraformResource"></a>

```typescript
import { googleSccEventThreatDetectionCustomModule } from '@cdktn/provider-google-beta'

googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.generateConfigForImport"></a>

```typescript
import { googleSccEventThreatDetectionCustomModule } from '@cdktn/provider-google-beta'

googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleSccEventThreatDetectionCustomModule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleSccEventThreatDetectionCustomModule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleSccEventThreatDetectionCustomModule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_scc_event_threat_detection_custom_module#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleSccEventThreatDetectionCustomModule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.lastEditor">lastEditor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference">GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.configInput">configInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.enablementStateInput">enablementStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts">GoogleSccEventThreatDetectionCustomModuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.config">config</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.enablementState">enablementState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `lastEditor`<sup>Required</sup> <a name="lastEditor" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.lastEditor"></a>

```typescript
public readonly lastEditor: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference">GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.configInput"></a>

```typescript
public readonly configInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `enablementStateInput`<sup>Optional</sup> <a name="enablementStateInput" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.enablementStateInput"></a>

```typescript
public readonly enablementStateInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleSccEventThreatDetectionCustomModuleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts">GoogleSccEventThreatDetectionCustomModuleTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.config"></a>

```typescript
public readonly config: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `enablementState`<sup>Required</sup> <a name="enablementState" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.enablementState"></a>

```typescript
public readonly enablementState: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSccEventThreatDetectionCustomModuleConfig <a name="GoogleSccEventThreatDetectionCustomModuleConfig" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.Initializer"></a>

```typescript
import { googleSccEventThreatDetectionCustomModule } from '@cdktn/provider-google-beta'

const googleSccEventThreatDetectionCustomModuleConfig: googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.config">config</a></code> | <code>string</code> | Config for the module. |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.enablementState">enablementState</a></code> | <code>string</code> | The state of enablement for the module at the given level of the hierarchy. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.organization">organization</a></code> | <code>string</code> | Numerical ID of the parent organization. |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.type">type</a></code> | <code>string</code> | Immutable. Type for the module. e.g. CONFIGURABLE_BAD_IP. |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.displayName">displayName</a></code> | <code>string</code> | The human readable name to be displayed for the module. |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_scc_event_threat_detection_custom_module#id GoogleSccEventThreatDetectionCustomModule#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts">GoogleSccEventThreatDetectionCustomModuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.config"></a>

```typescript
public readonly config: string;
```

- *Type:* string

Config for the module.

For the resident module, its config value is defined at this level.
For the inherited module, its config value is inherited from the ancestor module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_scc_event_threat_detection_custom_module#config GoogleSccEventThreatDetectionCustomModule#config}

---

##### `enablementState`<sup>Required</sup> <a name="enablementState" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.enablementState"></a>

```typescript
public readonly enablementState: string;
```

- *Type:* string

The state of enablement for the module at the given level of the hierarchy. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_scc_event_threat_detection_custom_module#enablement_state GoogleSccEventThreatDetectionCustomModule#enablement_state}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

Numerical ID of the parent organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_scc_event_threat_detection_custom_module#organization GoogleSccEventThreatDetectionCustomModule#organization}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Immutable. Type for the module. e.g. CONFIGURABLE_BAD_IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_scc_event_threat_detection_custom_module#type GoogleSccEventThreatDetectionCustomModule#type}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_scc_event_threat_detection_custom_module#deletion_policy GoogleSccEventThreatDetectionCustomModule#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The human readable name to be displayed for the module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_scc_event_threat_detection_custom_module#display_name GoogleSccEventThreatDetectionCustomModule#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_scc_event_threat_detection_custom_module#id GoogleSccEventThreatDetectionCustomModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleSccEventThreatDetectionCustomModuleTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts">GoogleSccEventThreatDetectionCustomModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_scc_event_threat_detection_custom_module#timeouts GoogleSccEventThreatDetectionCustomModule#timeouts}

---

### GoogleSccEventThreatDetectionCustomModuleTimeouts <a name="GoogleSccEventThreatDetectionCustomModuleTimeouts" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts.Initializer"></a>

```typescript
import { googleSccEventThreatDetectionCustomModule } from '@cdktn/provider-google-beta'

const googleSccEventThreatDetectionCustomModuleTimeouts: googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_scc_event_threat_detection_custom_module#create GoogleSccEventThreatDetectionCustomModule#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_scc_event_threat_detection_custom_module#delete GoogleSccEventThreatDetectionCustomModule#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_scc_event_threat_detection_custom_module#update GoogleSccEventThreatDetectionCustomModule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_scc_event_threat_detection_custom_module#create GoogleSccEventThreatDetectionCustomModule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_scc_event_threat_detection_custom_module#delete GoogleSccEventThreatDetectionCustomModule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_scc_event_threat_detection_custom_module#update GoogleSccEventThreatDetectionCustomModule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference <a name="GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleSccEventThreatDetectionCustomModule } from '@cdktn/provider-google-beta'

new googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts">GoogleSccEventThreatDetectionCustomModuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleSccEventThreatDetectionCustomModuleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSccEventThreatDetectionCustomModule.GoogleSccEventThreatDetectionCustomModuleTimeouts">GoogleSccEventThreatDetectionCustomModuleTimeouts</a>

---



