# `googleDiscoveryEngineProjectProvision` Submodule <a name="`googleDiscoveryEngineProjectProvision` Submodule" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDiscoveryEngineProjectProvision <a name="GoogleDiscoveryEngineProjectProvision" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision google_discovery_engine_project_provision}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer"></a>

```typescript
import { googleDiscoveryEngineProjectProvision } from '@cdktn/provider-google-beta'

new googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision(scope: Construct, id: string, config?: GoogleDiscoveryEngineProjectProvisionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig">GoogleDiscoveryEngineProjectProvisionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig">GoogleDiscoveryEngineProjectProvisionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.putSaasParams">putSaasParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetAcceptDataUseTerms">resetAcceptDataUseTerms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetDataUseTermsVersion">resetDataUseTermsVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetSaasParams">resetSaasParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSaasParams` <a name="putSaasParams" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.putSaasParams"></a>

```typescript
public putSaasParams(value: GoogleDiscoveryEngineProjectProvisionSaasParams): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.putSaasParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParams">GoogleDiscoveryEngineProjectProvisionSaasParams</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleDiscoveryEngineProjectProvisionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeouts">GoogleDiscoveryEngineProjectProvisionTimeouts</a>

---

##### `resetAcceptDataUseTerms` <a name="resetAcceptDataUseTerms" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetAcceptDataUseTerms"></a>

```typescript
public resetAcceptDataUseTerms(): void
```

##### `resetDataUseTermsVersion` <a name="resetDataUseTermsVersion" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetDataUseTermsVersion"></a>

```typescript
public resetDataUseTermsVersion(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSaasParams` <a name="resetSaasParams" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetSaasParams"></a>

```typescript
public resetSaasParams(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDiscoveryEngineProjectProvision resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.isConstruct"></a>

```typescript
import { googleDiscoveryEngineProjectProvision } from '@cdktn/provider-google-beta'

googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.isTerraformElement"></a>

```typescript
import { googleDiscoveryEngineProjectProvision } from '@cdktn/provider-google-beta'

googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.isTerraformResource"></a>

```typescript
import { googleDiscoveryEngineProjectProvision } from '@cdktn/provider-google-beta'

googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.generateConfigForImport"></a>

```typescript
import { googleDiscoveryEngineProjectProvision } from '@cdktn/provider-google-beta'

googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleDiscoveryEngineProjectProvision resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDiscoveryEngineProjectProvision to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDiscoveryEngineProjectProvision that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDiscoveryEngineProjectProvision to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.saasParams">saasParams</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference">GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference">GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.acceptDataUseTermsInput">acceptDataUseTermsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.dataUseTermsVersionInput">dataUseTermsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.saasParamsInput">saasParamsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParams">GoogleDiscoveryEngineProjectProvisionSaasParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeouts">GoogleDiscoveryEngineProjectProvisionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.acceptDataUseTerms">acceptDataUseTerms</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.dataUseTermsVersion">dataUseTermsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `saasParams`<sup>Required</sup> <a name="saasParams" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.saasParams"></a>

```typescript
public readonly saasParams: GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference">GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference">GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference</a>

---

##### `acceptDataUseTermsInput`<sup>Optional</sup> <a name="acceptDataUseTermsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.acceptDataUseTermsInput"></a>

```typescript
public readonly acceptDataUseTermsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `dataUseTermsVersionInput`<sup>Optional</sup> <a name="dataUseTermsVersionInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.dataUseTermsVersionInput"></a>

```typescript
public readonly dataUseTermsVersionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `saasParamsInput`<sup>Optional</sup> <a name="saasParamsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.saasParamsInput"></a>

```typescript
public readonly saasParamsInput: GoogleDiscoveryEngineProjectProvisionSaasParams;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParams">GoogleDiscoveryEngineProjectProvisionSaasParams</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleDiscoveryEngineProjectProvisionTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeouts">GoogleDiscoveryEngineProjectProvisionTimeouts</a>

---

##### `acceptDataUseTerms`<sup>Required</sup> <a name="acceptDataUseTerms" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.acceptDataUseTerms"></a>

```typescript
public readonly acceptDataUseTerms: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `dataUseTermsVersion`<sup>Required</sup> <a name="dataUseTermsVersion" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.dataUseTermsVersion"></a>

```typescript
public readonly dataUseTermsVersion: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvision.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDiscoveryEngineProjectProvisionConfig <a name="GoogleDiscoveryEngineProjectProvisionConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.Initializer"></a>

```typescript
import { googleDiscoveryEngineProjectProvision } from '@cdktn/provider-google-beta'

const googleDiscoveryEngineProjectProvisionConfig: googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.acceptDataUseTerms">acceptDataUseTerms</a></code> | <code>boolean \| cdktn.IResolvable</code> | Set to 'true' to specify that the caller has read and consents to the [Terms for data use](https://cloud.google.com/retail/data-use-terms). |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.dataUseTermsVersion">dataUseTermsVersion</a></code> | <code>string</code> | The version of the [Terms for data use](https://cloud.google.com/retail/data-use-terms) that the caller has read and consents to. An acceptable version is '2022-11-23', and this may change over time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#id GoogleDiscoveryEngineProjectProvision#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.location">location</a></code> | <code>string</code> | The geographic location in which to provision the project, such as 'global', 'us', or 'eu'. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#project GoogleDiscoveryEngineProjectProvision#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.saasParams">saasParams</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParams">GoogleDiscoveryEngineProjectProvisionSaasParams</a></code> | saas_params block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeouts">GoogleDiscoveryEngineProjectProvisionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `acceptDataUseTerms`<sup>Optional</sup> <a name="acceptDataUseTerms" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.acceptDataUseTerms"></a>

```typescript
public readonly acceptDataUseTerms: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Set to 'true' to specify that the caller has read and consents to the [Terms for data use](https://cloud.google.com/retail/data-use-terms).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#accept_data_use_terms GoogleDiscoveryEngineProjectProvision#accept_data_use_terms}

---

##### `dataUseTermsVersion`<sup>Optional</sup> <a name="dataUseTermsVersion" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.dataUseTermsVersion"></a>

```typescript
public readonly dataUseTermsVersion: string;
```

- *Type:* string

The version of the [Terms for data use](https://cloud.google.com/retail/data-use-terms) that the caller has read and consents to. An acceptable version is '2022-11-23', and this may change over time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#data_use_terms_version GoogleDiscoveryEngineProjectProvision#data_use_terms_version}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#id GoogleDiscoveryEngineProjectProvision#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The geographic location in which to provision the project, such as 'global', 'us', or 'eu'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#location GoogleDiscoveryEngineProjectProvision#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#project GoogleDiscoveryEngineProjectProvision#project}.

---

##### `saasParams`<sup>Optional</sup> <a name="saasParams" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.saasParams"></a>

```typescript
public readonly saasParams: GoogleDiscoveryEngineProjectProvisionSaasParams;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParams">GoogleDiscoveryEngineProjectProvisionSaasParams</a>

saas_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#saas_params GoogleDiscoveryEngineProjectProvision#saas_params}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDiscoveryEngineProjectProvisionTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeouts">GoogleDiscoveryEngineProjectProvisionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#timeouts GoogleDiscoveryEngineProjectProvision#timeouts}

---

### GoogleDiscoveryEngineProjectProvisionSaasParams <a name="GoogleDiscoveryEngineProjectProvisionSaasParams" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParams.Initializer"></a>

```typescript
import { googleDiscoveryEngineProjectProvision } from '@cdktn/provider-google-beta'

const googleDiscoveryEngineProjectProvisionSaasParams: googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParams.property.acceptBizQos">acceptBizQos</a></code> | <code>boolean \| cdktn.IResolvable</code> | Set to 'true' to specify that the caller has read and consents to the Terms for business edition quality of service. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParams.property.isBiz">isBiz</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether the current request is for Business edition ('true') or not ('false'). |

---

##### `acceptBizQos`<sup>Optional</sup> <a name="acceptBizQos" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParams.property.acceptBizQos"></a>

```typescript
public readonly acceptBizQos: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Set to 'true' to specify that the caller has read and consents to the Terms for business edition quality of service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#accept_biz_qos GoogleDiscoveryEngineProjectProvision#accept_biz_qos}

---

##### `isBiz`<sup>Optional</sup> <a name="isBiz" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParams.property.isBiz"></a>

```typescript
public readonly isBiz: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether the current request is for Business edition ('true') or not ('false').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#is_biz GoogleDiscoveryEngineProjectProvision#is_biz}

---

### GoogleDiscoveryEngineProjectProvisionTimeouts <a name="GoogleDiscoveryEngineProjectProvisionTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeouts.Initializer"></a>

```typescript
import { googleDiscoveryEngineProjectProvision } from '@cdktn/provider-google-beta'

const googleDiscoveryEngineProjectProvisionTimeouts: googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#create GoogleDiscoveryEngineProjectProvision#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#delete GoogleDiscoveryEngineProjectProvision#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#create GoogleDiscoveryEngineProjectProvision#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.11.0/docs/resources/google_discovery_engine_project_provision#delete GoogleDiscoveryEngineProjectProvision#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference <a name="GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.Initializer"></a>

```typescript
import { googleDiscoveryEngineProjectProvision } from '@cdktn/provider-google-beta'

new googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.resetAcceptBizQos">resetAcceptBizQos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.resetIsBiz">resetIsBiz</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAcceptBizQos` <a name="resetAcceptBizQos" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.resetAcceptBizQos"></a>

```typescript
public resetAcceptBizQos(): void
```

##### `resetIsBiz` <a name="resetIsBiz" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.resetIsBiz"></a>

```typescript
public resetIsBiz(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.property.acceptBizQosInput">acceptBizQosInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.property.isBizInput">isBizInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.property.acceptBizQos">acceptBizQos</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.property.isBiz">isBiz</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParams">GoogleDiscoveryEngineProjectProvisionSaasParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `acceptBizQosInput`<sup>Optional</sup> <a name="acceptBizQosInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.property.acceptBizQosInput"></a>

```typescript
public readonly acceptBizQosInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isBizInput`<sup>Optional</sup> <a name="isBizInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.property.isBizInput"></a>

```typescript
public readonly isBizInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `acceptBizQos`<sup>Required</sup> <a name="acceptBizQos" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.property.acceptBizQos"></a>

```typescript
public readonly acceptBizQos: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isBiz`<sup>Required</sup> <a name="isBiz" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.property.isBiz"></a>

```typescript
public readonly isBiz: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDiscoveryEngineProjectProvisionSaasParams;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionSaasParams">GoogleDiscoveryEngineProjectProvisionSaasParams</a>

---


### GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference <a name="GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleDiscoveryEngineProjectProvision } from '@cdktn/provider-google-beta'

new googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeouts">GoogleDiscoveryEngineProjectProvisionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDiscoveryEngineProjectProvisionTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineProjectProvision.GoogleDiscoveryEngineProjectProvisionTimeouts">GoogleDiscoveryEngineProjectProvisionTimeouts</a>

---



