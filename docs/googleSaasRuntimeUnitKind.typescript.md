# `googleSaasRuntimeUnitKind` Submodule <a name="`googleSaasRuntimeUnitKind` Submodule" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSaasRuntimeUnitKind <a name="GoogleSaasRuntimeUnitKind" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind google_saas_runtime_unit_kind}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer"></a>

```typescript
import { googleSaasRuntimeUnitKind } from '@cdktn/provider-google-beta'

new googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind(scope: Construct, id: string, config: GoogleSaasRuntimeUnitKindConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig">GoogleSaasRuntimeUnitKindConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig">GoogleSaasRuntimeUnitKindConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.putDependencies">putDependencies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.putInputVariableMappings">putInputVariableMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.putOutputVariableMappings">putOutputVariableMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetDefaultRelease">resetDefaultRelease</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetDependencies">resetDependencies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetInputVariableMappings">resetInputVariableMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetOutputVariableMappings">resetOutputVariableMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDependencies` <a name="putDependencies" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.putDependencies"></a>

```typescript
public putDependencies(value: IResolvable | GoogleSaasRuntimeUnitKindDependencies[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.putDependencies.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependencies">GoogleSaasRuntimeUnitKindDependencies</a>[]

---

##### `putInputVariableMappings` <a name="putInputVariableMappings" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.putInputVariableMappings"></a>

```typescript
public putInputVariableMappings(value: IResolvable | GoogleSaasRuntimeUnitKindInputVariableMappings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.putInputVariableMappings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings">GoogleSaasRuntimeUnitKindInputVariableMappings</a>[]

---

##### `putOutputVariableMappings` <a name="putOutputVariableMappings" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.putOutputVariableMappings"></a>

```typescript
public putOutputVariableMappings(value: IResolvable | GoogleSaasRuntimeUnitKindOutputVariableMappings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.putOutputVariableMappings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings">GoogleSaasRuntimeUnitKindOutputVariableMappings</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleSaasRuntimeUnitKindTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts">GoogleSaasRuntimeUnitKindTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetDefaultRelease` <a name="resetDefaultRelease" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetDefaultRelease"></a>

```typescript
public resetDefaultRelease(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDependencies` <a name="resetDependencies" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetDependencies"></a>

```typescript
public resetDependencies(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInputVariableMappings` <a name="resetInputVariableMappings" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetInputVariableMappings"></a>

```typescript
public resetInputVariableMappings(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetOutputVariableMappings` <a name="resetOutputVariableMappings" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetOutputVariableMappings"></a>

```typescript
public resetOutputVariableMappings(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleSaasRuntimeUnitKind resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.isConstruct"></a>

```typescript
import { googleSaasRuntimeUnitKind } from '@cdktn/provider-google-beta'

googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.isTerraformElement"></a>

```typescript
import { googleSaasRuntimeUnitKind } from '@cdktn/provider-google-beta'

googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.isTerraformResource"></a>

```typescript
import { googleSaasRuntimeUnitKind } from '@cdktn/provider-google-beta'

googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.generateConfigForImport"></a>

```typescript
import { googleSaasRuntimeUnitKind } from '@cdktn/provider-google-beta'

googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleSaasRuntimeUnitKind resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleSaasRuntimeUnitKind to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleSaasRuntimeUnitKind that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleSaasRuntimeUnitKind to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.dependencies">dependencies</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList">GoogleSaasRuntimeUnitKindDependenciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.inputVariableMappings">inputVariableMappings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList">GoogleSaasRuntimeUnitKindInputVariableMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.outputVariableMappings">outputVariableMappings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList">GoogleSaasRuntimeUnitKindOutputVariableMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference">GoogleSaasRuntimeUnitKindTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.defaultReleaseInput">defaultReleaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.dependenciesInput">dependenciesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependencies">GoogleSaasRuntimeUnitKindDependencies</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.inputVariableMappingsInput">inputVariableMappingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings">GoogleSaasRuntimeUnitKindInputVariableMappings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.outputVariableMappingsInput">outputVariableMappingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings">GoogleSaasRuntimeUnitKindOutputVariableMappings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.saasInput">saasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts">GoogleSaasRuntimeUnitKindTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.unitKindIdInput">unitKindIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.defaultRelease">defaultRelease</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.saas">saas</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.unitKindId">unitKindId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.dependencies"></a>

```typescript
public readonly dependencies: GoogleSaasRuntimeUnitKindDependenciesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList">GoogleSaasRuntimeUnitKindDependenciesList</a>

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `inputVariableMappings`<sup>Required</sup> <a name="inputVariableMappings" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.inputVariableMappings"></a>

```typescript
public readonly inputVariableMappings: GoogleSaasRuntimeUnitKindInputVariableMappingsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList">GoogleSaasRuntimeUnitKindInputVariableMappingsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputVariableMappings`<sup>Required</sup> <a name="outputVariableMappings" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.outputVariableMappings"></a>

```typescript
public readonly outputVariableMappings: GoogleSaasRuntimeUnitKindOutputVariableMappingsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList">GoogleSaasRuntimeUnitKindOutputVariableMappingsList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleSaasRuntimeUnitKindTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference">GoogleSaasRuntimeUnitKindTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `defaultReleaseInput`<sup>Optional</sup> <a name="defaultReleaseInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.defaultReleaseInput"></a>

```typescript
public readonly defaultReleaseInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `dependenciesInput`<sup>Optional</sup> <a name="dependenciesInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.dependenciesInput"></a>

```typescript
public readonly dependenciesInput: IResolvable | GoogleSaasRuntimeUnitKindDependencies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependencies">GoogleSaasRuntimeUnitKindDependencies</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inputVariableMappingsInput`<sup>Optional</sup> <a name="inputVariableMappingsInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.inputVariableMappingsInput"></a>

```typescript
public readonly inputVariableMappingsInput: IResolvable | GoogleSaasRuntimeUnitKindInputVariableMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings">GoogleSaasRuntimeUnitKindInputVariableMappings</a>[]

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `outputVariableMappingsInput`<sup>Optional</sup> <a name="outputVariableMappingsInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.outputVariableMappingsInput"></a>

```typescript
public readonly outputVariableMappingsInput: IResolvable | GoogleSaasRuntimeUnitKindOutputVariableMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings">GoogleSaasRuntimeUnitKindOutputVariableMappings</a>[]

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `saasInput`<sup>Optional</sup> <a name="saasInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.saasInput"></a>

```typescript
public readonly saasInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleSaasRuntimeUnitKindTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts">GoogleSaasRuntimeUnitKindTimeouts</a>

---

##### `unitKindIdInput`<sup>Optional</sup> <a name="unitKindIdInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.unitKindIdInput"></a>

```typescript
public readonly unitKindIdInput: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `defaultRelease`<sup>Required</sup> <a name="defaultRelease" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.defaultRelease"></a>

```typescript
public readonly defaultRelease: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `saas`<sup>Required</sup> <a name="saas" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.saas"></a>

```typescript
public readonly saas: string;
```

- *Type:* string

---

##### `unitKindId`<sup>Required</sup> <a name="unitKindId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.unitKindId"></a>

```typescript
public readonly unitKindId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKind.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSaasRuntimeUnitKindConfig <a name="GoogleSaasRuntimeUnitKindConfig" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.Initializer"></a>

```typescript
import { googleSaasRuntimeUnitKind } from '@cdktn/provider-google-beta'

const googleSaasRuntimeUnitKindConfig: googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.saas">saas</a></code> | <code>string</code> | A reference to the Saas that defines the product (managed service) that the producer wants to manage with App Lifecycle Manager. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.unitKindId">unitKindId</a></code> | <code>string</code> | The ID value for the new unit kind. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.defaultRelease">defaultRelease</a></code> | <code>string</code> | A reference to the Release object to use as default for creating new units of this UnitKind. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.dependencies">dependencies</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependencies">GoogleSaasRuntimeUnitKindDependencies</a>[]</code> | dependencies block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#id GoogleSaasRuntimeUnitKind#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.inputVariableMappings">inputVariableMappings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings">GoogleSaasRuntimeUnitKindInputVariableMappings</a>[]</code> | input_variable_mappings block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.outputVariableMappings">outputVariableMappings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings">GoogleSaasRuntimeUnitKindOutputVariableMappings</a>[]</code> | output_variable_mappings block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#project GoogleSaasRuntimeUnitKind#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts">GoogleSaasRuntimeUnitKindTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#location GoogleSaasRuntimeUnitKind#location}

---

##### `saas`<sup>Required</sup> <a name="saas" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.saas"></a>

```typescript
public readonly saas: string;
```

- *Type:* string

A reference to the Saas that defines the product (managed service) that the producer wants to manage with App Lifecycle Manager.

Part of the App Lifecycle Manager
common data model. Immutable once set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#saas GoogleSaasRuntimeUnitKind#saas}

---

##### `unitKindId`<sup>Required</sup> <a name="unitKindId" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.unitKindId"></a>

```typescript
public readonly unitKindId: string;
```

- *Type:* string

The ID value for the new unit kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#unit_kind_id GoogleSaasRuntimeUnitKind#unit_kind_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

More info: https://kubernetes.io/docs/user-guide/annotations

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#annotations GoogleSaasRuntimeUnitKind#annotations}

---

##### `defaultRelease`<sup>Optional</sup> <a name="defaultRelease" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.defaultRelease"></a>

```typescript
public readonly defaultRelease: string;
```

- *Type:* string

A reference to the Release object to use as default for creating new units of this UnitKind.

If not specified, a new unit must explicitly reference which release to use
for its creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#default_release GoogleSaasRuntimeUnitKind#default_release}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#deletion_policy GoogleSaasRuntimeUnitKind#deletion_policy}

---

##### `dependencies`<sup>Optional</sup> <a name="dependencies" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.dependencies"></a>

```typescript
public readonly dependencies: IResolvable | GoogleSaasRuntimeUnitKindDependencies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependencies">GoogleSaasRuntimeUnitKindDependencies</a>[]

dependencies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#dependencies GoogleSaasRuntimeUnitKind#dependencies}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#id GoogleSaasRuntimeUnitKind#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inputVariableMappings`<sup>Optional</sup> <a name="inputVariableMappings" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.inputVariableMappings"></a>

```typescript
public readonly inputVariableMappings: IResolvable | GoogleSaasRuntimeUnitKindInputVariableMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings">GoogleSaasRuntimeUnitKindInputVariableMappings</a>[]

input_variable_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#input_variable_mappings GoogleSaasRuntimeUnitKind#input_variable_mappings}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#labels GoogleSaasRuntimeUnitKind#labels}

---

##### `outputVariableMappings`<sup>Optional</sup> <a name="outputVariableMappings" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.outputVariableMappings"></a>

```typescript
public readonly outputVariableMappings: IResolvable | GoogleSaasRuntimeUnitKindOutputVariableMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings">GoogleSaasRuntimeUnitKindOutputVariableMappings</a>[]

output_variable_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#output_variable_mappings GoogleSaasRuntimeUnitKind#output_variable_mappings}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#project GoogleSaasRuntimeUnitKind#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleSaasRuntimeUnitKindTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts">GoogleSaasRuntimeUnitKindTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#timeouts GoogleSaasRuntimeUnitKind#timeouts}

---

### GoogleSaasRuntimeUnitKindDependencies <a name="GoogleSaasRuntimeUnitKindDependencies" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependencies.Initializer"></a>

```typescript
import { googleSaasRuntimeUnitKind } from '@cdktn/provider-google-beta'

const googleSaasRuntimeUnitKindDependencies: googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependencies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependencies.property.alias">alias</a></code> | <code>string</code> | An alias for the dependency. Used for input variable mapping. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependencies.property.unitKind">unitKind</a></code> | <code>string</code> | The unit kind of the dependency. |

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependencies.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

An alias for the dependency. Used for input variable mapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#alias GoogleSaasRuntimeUnitKind#alias}

---

##### `unitKind`<sup>Required</sup> <a name="unitKind" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependencies.property.unitKind"></a>

```typescript
public readonly unitKind: string;
```

- *Type:* string

The unit kind of the dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#unit_kind GoogleSaasRuntimeUnitKind#unit_kind}

---

### GoogleSaasRuntimeUnitKindInputVariableMappings <a name="GoogleSaasRuntimeUnitKindInputVariableMappings" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings.Initializer"></a>

```typescript
import { googleSaasRuntimeUnitKind } from '@cdktn/provider-google-beta'

const googleSaasRuntimeUnitKindInputVariableMappings: googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings.property.variable">variable</a></code> | <code>string</code> | name of the variable. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings.property.from">from</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFrom">GoogleSaasRuntimeUnitKindInputVariableMappingsFrom</a></code> | from block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings.property.to">to</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo">GoogleSaasRuntimeUnitKindInputVariableMappingsTo</a></code> | to block. |

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings.property.variable"></a>

```typescript
public readonly variable: string;
```

- *Type:* string

name of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#variable GoogleSaasRuntimeUnitKind#variable}

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings.property.from"></a>

```typescript
public readonly from: GoogleSaasRuntimeUnitKindInputVariableMappingsFrom;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFrom">GoogleSaasRuntimeUnitKindInputVariableMappingsFrom</a>

from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#from GoogleSaasRuntimeUnitKind#from}

---

##### `to`<sup>Optional</sup> <a name="to" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings.property.to"></a>

```typescript
public readonly to: GoogleSaasRuntimeUnitKindInputVariableMappingsTo;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo">GoogleSaasRuntimeUnitKindInputVariableMappingsTo</a>

to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#to GoogleSaasRuntimeUnitKind#to}

---

### GoogleSaasRuntimeUnitKindInputVariableMappingsFrom <a name="GoogleSaasRuntimeUnitKindInputVariableMappingsFrom" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFrom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFrom.Initializer"></a>

```typescript
import { googleSaasRuntimeUnitKind } from '@cdktn/provider-google-beta'

const googleSaasRuntimeUnitKindInputVariableMappingsFrom: googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFrom = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFrom.property.dependency">dependency</a></code> | <code>string</code> | Alias of the dependency that the outputVariable will pass its value to. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFrom.property.outputVariable">outputVariable</a></code> | <code>string</code> | Name of the outputVariable on the dependency. |

---

##### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFrom.property.dependency"></a>

```typescript
public readonly dependency: string;
```

- *Type:* string

Alias of the dependency that the outputVariable will pass its value to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#dependency GoogleSaasRuntimeUnitKind#dependency}

---

##### `outputVariable`<sup>Required</sup> <a name="outputVariable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFrom.property.outputVariable"></a>

```typescript
public readonly outputVariable: string;
```

- *Type:* string

Name of the outputVariable on the dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#output_variable GoogleSaasRuntimeUnitKind#output_variable}

---

### GoogleSaasRuntimeUnitKindInputVariableMappingsTo <a name="GoogleSaasRuntimeUnitKindInputVariableMappingsTo" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo.Initializer"></a>

```typescript
import { googleSaasRuntimeUnitKind } from '@cdktn/provider-google-beta'

const googleSaasRuntimeUnitKindInputVariableMappingsTo: googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo.property.dependency">dependency</a></code> | <code>string</code> | Alias of the dependency that the inputVariable will pass its value to. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo.property.inputVariable">inputVariable</a></code> | <code>string</code> | Name of the inputVariable on the dependency. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo.property.ignoreForLookup">ignoreForLookup</a></code> | <code>boolean \| cdktn.IResolvable</code> | Tells App Lifecycle Manager if this mapping should be used during lookup or not. |

---

##### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo.property.dependency"></a>

```typescript
public readonly dependency: string;
```

- *Type:* string

Alias of the dependency that the inputVariable will pass its value to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#dependency GoogleSaasRuntimeUnitKind#dependency}

---

##### `inputVariable`<sup>Required</sup> <a name="inputVariable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo.property.inputVariable"></a>

```typescript
public readonly inputVariable: string;
```

- *Type:* string

Name of the inputVariable on the dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#input_variable GoogleSaasRuntimeUnitKind#input_variable}

---

##### `ignoreForLookup`<sup>Optional</sup> <a name="ignoreForLookup" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo.property.ignoreForLookup"></a>

```typescript
public readonly ignoreForLookup: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Tells App Lifecycle Manager if this mapping should be used during lookup or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#ignore_for_lookup GoogleSaasRuntimeUnitKind#ignore_for_lookup}

---

### GoogleSaasRuntimeUnitKindOutputVariableMappings <a name="GoogleSaasRuntimeUnitKindOutputVariableMappings" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings.Initializer"></a>

```typescript
import { googleSaasRuntimeUnitKind } from '@cdktn/provider-google-beta'

const googleSaasRuntimeUnitKindOutputVariableMappings: googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings.property.variable">variable</a></code> | <code>string</code> | name of the variable. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings.property.from">from</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom">GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom</a></code> | from block. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings.property.to">to</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo">GoogleSaasRuntimeUnitKindOutputVariableMappingsTo</a></code> | to block. |

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings.property.variable"></a>

```typescript
public readonly variable: string;
```

- *Type:* string

name of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#variable GoogleSaasRuntimeUnitKind#variable}

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings.property.from"></a>

```typescript
public readonly from: GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom">GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom</a>

from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#from GoogleSaasRuntimeUnitKind#from}

---

##### `to`<sup>Optional</sup> <a name="to" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings.property.to"></a>

```typescript
public readonly to: GoogleSaasRuntimeUnitKindOutputVariableMappingsTo;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo">GoogleSaasRuntimeUnitKindOutputVariableMappingsTo</a>

to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#to GoogleSaasRuntimeUnitKind#to}

---

### GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom <a name="GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom.Initializer"></a>

```typescript
import { googleSaasRuntimeUnitKind } from '@cdktn/provider-google-beta'

const googleSaasRuntimeUnitKindOutputVariableMappingsFrom: googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom.property.dependency">dependency</a></code> | <code>string</code> | Alias of the dependency that the outputVariable will pass its value to. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom.property.outputVariable">outputVariable</a></code> | <code>string</code> | Name of the outputVariable on the dependency. |

---

##### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom.property.dependency"></a>

```typescript
public readonly dependency: string;
```

- *Type:* string

Alias of the dependency that the outputVariable will pass its value to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#dependency GoogleSaasRuntimeUnitKind#dependency}

---

##### `outputVariable`<sup>Required</sup> <a name="outputVariable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom.property.outputVariable"></a>

```typescript
public readonly outputVariable: string;
```

- *Type:* string

Name of the outputVariable on the dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#output_variable GoogleSaasRuntimeUnitKind#output_variable}

---

### GoogleSaasRuntimeUnitKindOutputVariableMappingsTo <a name="GoogleSaasRuntimeUnitKindOutputVariableMappingsTo" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo.Initializer"></a>

```typescript
import { googleSaasRuntimeUnitKind } from '@cdktn/provider-google-beta'

const googleSaasRuntimeUnitKindOutputVariableMappingsTo: googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo.property.dependency">dependency</a></code> | <code>string</code> | Alias of the dependency that the inputVariable will pass its value to. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo.property.inputVariable">inputVariable</a></code> | <code>string</code> | Name of the inputVariable on the dependency. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo.property.ignoreForLookup">ignoreForLookup</a></code> | <code>boolean \| cdktn.IResolvable</code> | Tells App Lifecycle Manager if this mapping should be used during lookup or not. |

---

##### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo.property.dependency"></a>

```typescript
public readonly dependency: string;
```

- *Type:* string

Alias of the dependency that the inputVariable will pass its value to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#dependency GoogleSaasRuntimeUnitKind#dependency}

---

##### `inputVariable`<sup>Required</sup> <a name="inputVariable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo.property.inputVariable"></a>

```typescript
public readonly inputVariable: string;
```

- *Type:* string

Name of the inputVariable on the dependency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#input_variable GoogleSaasRuntimeUnitKind#input_variable}

---

##### `ignoreForLookup`<sup>Optional</sup> <a name="ignoreForLookup" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo.property.ignoreForLookup"></a>

```typescript
public readonly ignoreForLookup: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Tells App Lifecycle Manager if this mapping should be used during lookup or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#ignore_for_lookup GoogleSaasRuntimeUnitKind#ignore_for_lookup}

---

### GoogleSaasRuntimeUnitKindTimeouts <a name="GoogleSaasRuntimeUnitKindTimeouts" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts.Initializer"></a>

```typescript
import { googleSaasRuntimeUnitKind } from '@cdktn/provider-google-beta'

const googleSaasRuntimeUnitKindTimeouts: googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#create GoogleSaasRuntimeUnitKind#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#delete GoogleSaasRuntimeUnitKind#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#update GoogleSaasRuntimeUnitKind#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#create GoogleSaasRuntimeUnitKind#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#delete GoogleSaasRuntimeUnitKind#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_saas_runtime_unit_kind#update GoogleSaasRuntimeUnitKind#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSaasRuntimeUnitKindDependenciesList <a name="GoogleSaasRuntimeUnitKindDependenciesList" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.Initializer"></a>

```typescript
import { googleSaasRuntimeUnitKind } from '@cdktn/provider-google-beta'

new googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.get"></a>

```typescript
public get(index: number): GoogleSaasRuntimeUnitKindDependenciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependencies">GoogleSaasRuntimeUnitKindDependencies</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleSaasRuntimeUnitKindDependencies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependencies">GoogleSaasRuntimeUnitKindDependencies</a>[]

---


### GoogleSaasRuntimeUnitKindDependenciesOutputReference <a name="GoogleSaasRuntimeUnitKindDependenciesOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.Initializer"></a>

```typescript
import { googleSaasRuntimeUnitKind } from '@cdktn/provider-google-beta'

new googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.property.unitKindInput">unitKindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.property.unitKind">unitKind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependencies">GoogleSaasRuntimeUnitKindDependencies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `unitKindInput`<sup>Optional</sup> <a name="unitKindInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.property.unitKindInput"></a>

```typescript
public readonly unitKindInput: string;
```

- *Type:* string

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `unitKind`<sup>Required</sup> <a name="unitKind" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.property.unitKind"></a>

```typescript
public readonly unitKind: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependenciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleSaasRuntimeUnitKindDependencies;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindDependencies">GoogleSaasRuntimeUnitKindDependencies</a>

---


### GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference <a name="GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.Initializer"></a>

```typescript
import { googleSaasRuntimeUnitKind } from '@cdktn/provider-google-beta'

new googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.dependencyInput">dependencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.outputVariableInput">outputVariableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.dependency">dependency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.outputVariable">outputVariable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFrom">GoogleSaasRuntimeUnitKindInputVariableMappingsFrom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dependencyInput`<sup>Optional</sup> <a name="dependencyInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.dependencyInput"></a>

```typescript
public readonly dependencyInput: string;
```

- *Type:* string

---

##### `outputVariableInput`<sup>Optional</sup> <a name="outputVariableInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.outputVariableInput"></a>

```typescript
public readonly outputVariableInput: string;
```

- *Type:* string

---

##### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.dependency"></a>

```typescript
public readonly dependency: string;
```

- *Type:* string

---

##### `outputVariable`<sup>Required</sup> <a name="outputVariable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.outputVariable"></a>

```typescript
public readonly outputVariable: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleSaasRuntimeUnitKindInputVariableMappingsFrom;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFrom">GoogleSaasRuntimeUnitKindInputVariableMappingsFrom</a>

---


### GoogleSaasRuntimeUnitKindInputVariableMappingsList <a name="GoogleSaasRuntimeUnitKindInputVariableMappingsList" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.Initializer"></a>

```typescript
import { googleSaasRuntimeUnitKind } from '@cdktn/provider-google-beta'

new googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.get"></a>

```typescript
public get(index: number): GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings">GoogleSaasRuntimeUnitKindInputVariableMappings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleSaasRuntimeUnitKindInputVariableMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings">GoogleSaasRuntimeUnitKindInputVariableMappings</a>[]

---


### GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference <a name="GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer"></a>

```typescript
import { googleSaasRuntimeUnitKind } from '@cdktn/provider-google-beta'

new googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.putFrom">putFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.putTo">putTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.resetFrom">resetFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.resetTo">resetTo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFrom` <a name="putFrom" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.putFrom"></a>

```typescript
public putFrom(value: GoogleSaasRuntimeUnitKindInputVariableMappingsFrom): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.putFrom.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFrom">GoogleSaasRuntimeUnitKindInputVariableMappingsFrom</a>

---

##### `putTo` <a name="putTo" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.putTo"></a>

```typescript
public putTo(value: GoogleSaasRuntimeUnitKindInputVariableMappingsTo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.putTo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo">GoogleSaasRuntimeUnitKindInputVariableMappingsTo</a>

---

##### `resetFrom` <a name="resetFrom" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.resetFrom"></a>

```typescript
public resetFrom(): void
```

##### `resetTo` <a name="resetTo" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.resetTo"></a>

```typescript
public resetTo(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.from">from</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference">GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.to">to</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference">GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.fromInput">fromInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFrom">GoogleSaasRuntimeUnitKindInputVariableMappingsFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.toInput">toInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo">GoogleSaasRuntimeUnitKindInputVariableMappingsTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.variableInput">variableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.variable">variable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings">GoogleSaasRuntimeUnitKindInputVariableMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.from"></a>

```typescript
public readonly from: GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference">GoogleSaasRuntimeUnitKindInputVariableMappingsFromOutputReference</a>

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.to"></a>

```typescript
public readonly to: GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference">GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference</a>

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.fromInput"></a>

```typescript
public readonly fromInput: GoogleSaasRuntimeUnitKindInputVariableMappingsFrom;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsFrom">GoogleSaasRuntimeUnitKindInputVariableMappingsFrom</a>

---

##### `toInput`<sup>Optional</sup> <a name="toInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.toInput"></a>

```typescript
public readonly toInput: GoogleSaasRuntimeUnitKindInputVariableMappingsTo;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo">GoogleSaasRuntimeUnitKindInputVariableMappingsTo</a>

---

##### `variableInput`<sup>Optional</sup> <a name="variableInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.variableInput"></a>

```typescript
public readonly variableInput: string;
```

- *Type:* string

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.variable"></a>

```typescript
public readonly variable: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleSaasRuntimeUnitKindInputVariableMappings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappings">GoogleSaasRuntimeUnitKindInputVariableMappings</a>

---


### GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference <a name="GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.Initializer"></a>

```typescript
import { googleSaasRuntimeUnitKind } from '@cdktn/provider-google-beta'

new googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.resetIgnoreForLookup">resetIgnoreForLookup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIgnoreForLookup` <a name="resetIgnoreForLookup" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.resetIgnoreForLookup"></a>

```typescript
public resetIgnoreForLookup(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.dependencyInput">dependencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.ignoreForLookupInput">ignoreForLookupInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.inputVariableInput">inputVariableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.dependency">dependency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.ignoreForLookup">ignoreForLookup</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.inputVariable">inputVariable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo">GoogleSaasRuntimeUnitKindInputVariableMappingsTo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dependencyInput`<sup>Optional</sup> <a name="dependencyInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.dependencyInput"></a>

```typescript
public readonly dependencyInput: string;
```

- *Type:* string

---

##### `ignoreForLookupInput`<sup>Optional</sup> <a name="ignoreForLookupInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.ignoreForLookupInput"></a>

```typescript
public readonly ignoreForLookupInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `inputVariableInput`<sup>Optional</sup> <a name="inputVariableInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.inputVariableInput"></a>

```typescript
public readonly inputVariableInput: string;
```

- *Type:* string

---

##### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.dependency"></a>

```typescript
public readonly dependency: string;
```

- *Type:* string

---

##### `ignoreForLookup`<sup>Required</sup> <a name="ignoreForLookup" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.ignoreForLookup"></a>

```typescript
public readonly ignoreForLookup: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `inputVariable`<sup>Required</sup> <a name="inputVariable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.inputVariable"></a>

```typescript
public readonly inputVariable: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsToOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleSaasRuntimeUnitKindInputVariableMappingsTo;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindInputVariableMappingsTo">GoogleSaasRuntimeUnitKindInputVariableMappingsTo</a>

---


### GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference <a name="GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.Initializer"></a>

```typescript
import { googleSaasRuntimeUnitKind } from '@cdktn/provider-google-beta'

new googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.dependencyInput">dependencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.outputVariableInput">outputVariableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.dependency">dependency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.outputVariable">outputVariable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom">GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dependencyInput`<sup>Optional</sup> <a name="dependencyInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.dependencyInput"></a>

```typescript
public readonly dependencyInput: string;
```

- *Type:* string

---

##### `outputVariableInput`<sup>Optional</sup> <a name="outputVariableInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.outputVariableInput"></a>

```typescript
public readonly outputVariableInput: string;
```

- *Type:* string

---

##### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.dependency"></a>

```typescript
public readonly dependency: string;
```

- *Type:* string

---

##### `outputVariable`<sup>Required</sup> <a name="outputVariable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.outputVariable"></a>

```typescript
public readonly outputVariable: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom">GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom</a>

---


### GoogleSaasRuntimeUnitKindOutputVariableMappingsList <a name="GoogleSaasRuntimeUnitKindOutputVariableMappingsList" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.Initializer"></a>

```typescript
import { googleSaasRuntimeUnitKind } from '@cdktn/provider-google-beta'

new googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.get"></a>

```typescript
public get(index: number): GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings">GoogleSaasRuntimeUnitKindOutputVariableMappings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleSaasRuntimeUnitKindOutputVariableMappings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings">GoogleSaasRuntimeUnitKindOutputVariableMappings</a>[]

---


### GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference <a name="GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer"></a>

```typescript
import { googleSaasRuntimeUnitKind } from '@cdktn/provider-google-beta'

new googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.putFrom">putFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.putTo">putTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.resetFrom">resetFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.resetTo">resetTo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFrom` <a name="putFrom" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.putFrom"></a>

```typescript
public putFrom(value: GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.putFrom.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom">GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom</a>

---

##### `putTo` <a name="putTo" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.putTo"></a>

```typescript
public putTo(value: GoogleSaasRuntimeUnitKindOutputVariableMappingsTo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.putTo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo">GoogleSaasRuntimeUnitKindOutputVariableMappingsTo</a>

---

##### `resetFrom` <a name="resetFrom" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.resetFrom"></a>

```typescript
public resetFrom(): void
```

##### `resetTo` <a name="resetTo" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.resetTo"></a>

```typescript
public resetTo(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.from">from</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference">GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.to">to</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference">GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.fromInput">fromInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom">GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.toInput">toInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo">GoogleSaasRuntimeUnitKindOutputVariableMappingsTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.variableInput">variableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.variable">variable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings">GoogleSaasRuntimeUnitKindOutputVariableMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.from"></a>

```typescript
public readonly from: GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference">GoogleSaasRuntimeUnitKindOutputVariableMappingsFromOutputReference</a>

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.to"></a>

```typescript
public readonly to: GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference">GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference</a>

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.fromInput"></a>

```typescript
public readonly fromInput: GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom">GoogleSaasRuntimeUnitKindOutputVariableMappingsFrom</a>

---

##### `toInput`<sup>Optional</sup> <a name="toInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.toInput"></a>

```typescript
public readonly toInput: GoogleSaasRuntimeUnitKindOutputVariableMappingsTo;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo">GoogleSaasRuntimeUnitKindOutputVariableMappingsTo</a>

---

##### `variableInput`<sup>Optional</sup> <a name="variableInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.variableInput"></a>

```typescript
public readonly variableInput: string;
```

- *Type:* string

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.variable"></a>

```typescript
public readonly variable: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleSaasRuntimeUnitKindOutputVariableMappings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappings">GoogleSaasRuntimeUnitKindOutputVariableMappings</a>

---


### GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference <a name="GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.Initializer"></a>

```typescript
import { googleSaasRuntimeUnitKind } from '@cdktn/provider-google-beta'

new googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.resetIgnoreForLookup">resetIgnoreForLookup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIgnoreForLookup` <a name="resetIgnoreForLookup" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.resetIgnoreForLookup"></a>

```typescript
public resetIgnoreForLookup(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.dependencyInput">dependencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.ignoreForLookupInput">ignoreForLookupInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.inputVariableInput">inputVariableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.dependency">dependency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.ignoreForLookup">ignoreForLookup</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.inputVariable">inputVariable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo">GoogleSaasRuntimeUnitKindOutputVariableMappingsTo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dependencyInput`<sup>Optional</sup> <a name="dependencyInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.dependencyInput"></a>

```typescript
public readonly dependencyInput: string;
```

- *Type:* string

---

##### `ignoreForLookupInput`<sup>Optional</sup> <a name="ignoreForLookupInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.ignoreForLookupInput"></a>

```typescript
public readonly ignoreForLookupInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `inputVariableInput`<sup>Optional</sup> <a name="inputVariableInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.inputVariableInput"></a>

```typescript
public readonly inputVariableInput: string;
```

- *Type:* string

---

##### `dependency`<sup>Required</sup> <a name="dependency" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.dependency"></a>

```typescript
public readonly dependency: string;
```

- *Type:* string

---

##### `ignoreForLookup`<sup>Required</sup> <a name="ignoreForLookup" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.ignoreForLookup"></a>

```typescript
public readonly ignoreForLookup: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `inputVariable`<sup>Required</sup> <a name="inputVariable" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.inputVariable"></a>

```typescript
public readonly inputVariable: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsToOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleSaasRuntimeUnitKindOutputVariableMappingsTo;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindOutputVariableMappingsTo">GoogleSaasRuntimeUnitKindOutputVariableMappingsTo</a>

---


### GoogleSaasRuntimeUnitKindTimeoutsOutputReference <a name="GoogleSaasRuntimeUnitKindTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleSaasRuntimeUnitKind } from '@cdktn/provider-google-beta'

new googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts">GoogleSaasRuntimeUnitKindTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleSaasRuntimeUnitKindTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSaasRuntimeUnitKind.GoogleSaasRuntimeUnitKindTimeouts">GoogleSaasRuntimeUnitKindTimeouts</a>

---



