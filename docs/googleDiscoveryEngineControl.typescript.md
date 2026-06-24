# `googleDiscoveryEngineControl` Submodule <a name="`googleDiscoveryEngineControl` Submodule" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDiscoveryEngineControl <a name="GoogleDiscoveryEngineControl" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control google_discovery_engine_control}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer"></a>

```typescript
import { googleDiscoveryEngineControl } from '@cdktn/provider-google-beta'

new googleDiscoveryEngineControl.GoogleDiscoveryEngineControl(scope: Construct, id: string, config: GoogleDiscoveryEngineControlConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig">GoogleDiscoveryEngineControlConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig">GoogleDiscoveryEngineControlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putBoostAction">putBoostAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putFilterAction">putFilterAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putPromoteAction">putPromoteAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putRedirectAction">putRedirectAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putSynonymsAction">putSynonymsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetBoostAction">resetBoostAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetCollectionId">resetCollectionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetConditions">resetConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetFilterAction">resetFilterAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetPromoteAction">resetPromoteAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetRedirectAction">resetRedirectAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetSynonymsAction">resetSynonymsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetUseCases">resetUseCases</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBoostAction` <a name="putBoostAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putBoostAction"></a>

```typescript
public putBoostAction(value: GoogleDiscoveryEngineControlBoostAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putBoostAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostAction">GoogleDiscoveryEngineControlBoostAction</a>

---

##### `putConditions` <a name="putConditions" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putConditions"></a>

```typescript
public putConditions(value: IResolvable | GoogleDiscoveryEngineControlConditions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putConditions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditions">GoogleDiscoveryEngineControlConditions</a>[]

---

##### `putFilterAction` <a name="putFilterAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putFilterAction"></a>

```typescript
public putFilterAction(value: GoogleDiscoveryEngineControlFilterAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putFilterAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterAction">GoogleDiscoveryEngineControlFilterAction</a>

---

##### `putPromoteAction` <a name="putPromoteAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putPromoteAction"></a>

```typescript
public putPromoteAction(value: GoogleDiscoveryEngineControlPromoteAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putPromoteAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteAction">GoogleDiscoveryEngineControlPromoteAction</a>

---

##### `putRedirectAction` <a name="putRedirectAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putRedirectAction"></a>

```typescript
public putRedirectAction(value: GoogleDiscoveryEngineControlRedirectAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putRedirectAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectAction">GoogleDiscoveryEngineControlRedirectAction</a>

---

##### `putSynonymsAction` <a name="putSynonymsAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putSynonymsAction"></a>

```typescript
public putSynonymsAction(value: GoogleDiscoveryEngineControlSynonymsAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putSynonymsAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsAction">GoogleDiscoveryEngineControlSynonymsAction</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleDiscoveryEngineControlTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeouts">GoogleDiscoveryEngineControlTimeouts</a>

---

##### `resetBoostAction` <a name="resetBoostAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetBoostAction"></a>

```typescript
public resetBoostAction(): void
```

##### `resetCollectionId` <a name="resetCollectionId" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetCollectionId"></a>

```typescript
public resetCollectionId(): void
```

##### `resetConditions` <a name="resetConditions" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetConditions"></a>

```typescript
public resetConditions(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetFilterAction` <a name="resetFilterAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetFilterAction"></a>

```typescript
public resetFilterAction(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetPromoteAction` <a name="resetPromoteAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetPromoteAction"></a>

```typescript
public resetPromoteAction(): void
```

##### `resetRedirectAction` <a name="resetRedirectAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetRedirectAction"></a>

```typescript
public resetRedirectAction(): void
```

##### `resetSynonymsAction` <a name="resetSynonymsAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetSynonymsAction"></a>

```typescript
public resetSynonymsAction(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUseCases` <a name="resetUseCases" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.resetUseCases"></a>

```typescript
public resetUseCases(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDiscoveryEngineControl resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.isConstruct"></a>

```typescript
import { googleDiscoveryEngineControl } from '@cdktn/provider-google-beta'

googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.isTerraformElement"></a>

```typescript
import { googleDiscoveryEngineControl } from '@cdktn/provider-google-beta'

googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.isTerraformResource"></a>

```typescript
import { googleDiscoveryEngineControl } from '@cdktn/provider-google-beta'

googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.generateConfigForImport"></a>

```typescript
import { googleDiscoveryEngineControl } from '@cdktn/provider-google-beta'

googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleDiscoveryEngineControl resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDiscoveryEngineControl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDiscoveryEngineControl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDiscoveryEngineControl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.boostAction">boostAction</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference">GoogleDiscoveryEngineControlBoostActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList">GoogleDiscoveryEngineControlConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.filterAction">filterAction</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference">GoogleDiscoveryEngineControlFilterActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.promoteAction">promoteAction</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference">GoogleDiscoveryEngineControlPromoteActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.redirectAction">redirectAction</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference">GoogleDiscoveryEngineControlRedirectActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.synonymsAction">synonymsAction</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference">GoogleDiscoveryEngineControlSynonymsActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference">GoogleDiscoveryEngineControlTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.boostActionInput">boostActionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostAction">GoogleDiscoveryEngineControlBoostAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.collectionIdInput">collectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.conditionsInput">conditionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditions">GoogleDiscoveryEngineControlConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.controlIdInput">controlIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.engineIdInput">engineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.filterActionInput">filterActionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterAction">GoogleDiscoveryEngineControlFilterAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.promoteActionInput">promoteActionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteAction">GoogleDiscoveryEngineControlPromoteAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.redirectActionInput">redirectActionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectAction">GoogleDiscoveryEngineControlRedirectAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.solutionTypeInput">solutionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.synonymsActionInput">synonymsActionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsAction">GoogleDiscoveryEngineControlSynonymsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeouts">GoogleDiscoveryEngineControlTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.useCasesInput">useCasesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.collectionId">collectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.controlId">controlId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.engineId">engineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.solutionType">solutionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.useCases">useCases</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `boostAction`<sup>Required</sup> <a name="boostAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.boostAction"></a>

```typescript
public readonly boostAction: GoogleDiscoveryEngineControlBoostActionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference">GoogleDiscoveryEngineControlBoostActionOutputReference</a>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.conditions"></a>

```typescript
public readonly conditions: GoogleDiscoveryEngineControlConditionsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList">GoogleDiscoveryEngineControlConditionsList</a>

---

##### `filterAction`<sup>Required</sup> <a name="filterAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.filterAction"></a>

```typescript
public readonly filterAction: GoogleDiscoveryEngineControlFilterActionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference">GoogleDiscoveryEngineControlFilterActionOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `promoteAction`<sup>Required</sup> <a name="promoteAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.promoteAction"></a>

```typescript
public readonly promoteAction: GoogleDiscoveryEngineControlPromoteActionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference">GoogleDiscoveryEngineControlPromoteActionOutputReference</a>

---

##### `redirectAction`<sup>Required</sup> <a name="redirectAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.redirectAction"></a>

```typescript
public readonly redirectAction: GoogleDiscoveryEngineControlRedirectActionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference">GoogleDiscoveryEngineControlRedirectActionOutputReference</a>

---

##### `synonymsAction`<sup>Required</sup> <a name="synonymsAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.synonymsAction"></a>

```typescript
public readonly synonymsAction: GoogleDiscoveryEngineControlSynonymsActionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference">GoogleDiscoveryEngineControlSynonymsActionOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDiscoveryEngineControlTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference">GoogleDiscoveryEngineControlTimeoutsOutputReference</a>

---

##### `boostActionInput`<sup>Optional</sup> <a name="boostActionInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.boostActionInput"></a>

```typescript
public readonly boostActionInput: GoogleDiscoveryEngineControlBoostAction;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostAction">GoogleDiscoveryEngineControlBoostAction</a>

---

##### `collectionIdInput`<sup>Optional</sup> <a name="collectionIdInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.collectionIdInput"></a>

```typescript
public readonly collectionIdInput: string;
```

- *Type:* string

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.conditionsInput"></a>

```typescript
public readonly conditionsInput: IResolvable | GoogleDiscoveryEngineControlConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditions">GoogleDiscoveryEngineControlConditions</a>[]

---

##### `controlIdInput`<sup>Optional</sup> <a name="controlIdInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.controlIdInput"></a>

```typescript
public readonly controlIdInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `engineIdInput`<sup>Optional</sup> <a name="engineIdInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.engineIdInput"></a>

```typescript
public readonly engineIdInput: string;
```

- *Type:* string

---

##### `filterActionInput`<sup>Optional</sup> <a name="filterActionInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.filterActionInput"></a>

```typescript
public readonly filterActionInput: GoogleDiscoveryEngineControlFilterAction;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterAction">GoogleDiscoveryEngineControlFilterAction</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `promoteActionInput`<sup>Optional</sup> <a name="promoteActionInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.promoteActionInput"></a>

```typescript
public readonly promoteActionInput: GoogleDiscoveryEngineControlPromoteAction;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteAction">GoogleDiscoveryEngineControlPromoteAction</a>

---

##### `redirectActionInput`<sup>Optional</sup> <a name="redirectActionInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.redirectActionInput"></a>

```typescript
public readonly redirectActionInput: GoogleDiscoveryEngineControlRedirectAction;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectAction">GoogleDiscoveryEngineControlRedirectAction</a>

---

##### `solutionTypeInput`<sup>Optional</sup> <a name="solutionTypeInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.solutionTypeInput"></a>

```typescript
public readonly solutionTypeInput: string;
```

- *Type:* string

---

##### `synonymsActionInput`<sup>Optional</sup> <a name="synonymsActionInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.synonymsActionInput"></a>

```typescript
public readonly synonymsActionInput: GoogleDiscoveryEngineControlSynonymsAction;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsAction">GoogleDiscoveryEngineControlSynonymsAction</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleDiscoveryEngineControlTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeouts">GoogleDiscoveryEngineControlTimeouts</a>

---

##### `useCasesInput`<sup>Optional</sup> <a name="useCasesInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.useCasesInput"></a>

```typescript
public readonly useCasesInput: string[];
```

- *Type:* string[]

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.collectionId"></a>

```typescript
public readonly collectionId: string;
```

- *Type:* string

---

##### `controlId`<sup>Required</sup> <a name="controlId" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.controlId"></a>

```typescript
public readonly controlId: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `engineId`<sup>Required</sup> <a name="engineId" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.engineId"></a>

```typescript
public readonly engineId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `solutionType`<sup>Required</sup> <a name="solutionType" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.solutionType"></a>

```typescript
public readonly solutionType: string;
```

- *Type:* string

---

##### `useCases`<sup>Required</sup> <a name="useCases" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.useCases"></a>

```typescript
public readonly useCases: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControl.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDiscoveryEngineControlBoostAction <a name="GoogleDiscoveryEngineControlBoostAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostAction.Initializer"></a>

```typescript
import { googleDiscoveryEngineControl } from '@cdktn/provider-google-beta'

const googleDiscoveryEngineControlBoostAction: googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostAction.property.dataStore">dataStore</a></code> | <code>string</code> | The data store to boost. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostAction.property.filter">filter</a></code> | <code>string</code> | The filter to apply to the search results. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostAction.property.fixedBoost">fixedBoost</a></code> | <code>number</code> | The fixed boost value to apply to the search results. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostAction.property.interpolationBoostSpec">interpolationBoostSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec">GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec</a></code> | interpolation_boost_spec block. |

---

##### `dataStore`<sup>Required</sup> <a name="dataStore" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostAction.property.dataStore"></a>

```typescript
public readonly dataStore: string;
```

- *Type:* string

The data store to boost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#data_store GoogleDiscoveryEngineControl#data_store}

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostAction.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

The filter to apply to the search results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#filter GoogleDiscoveryEngineControl#filter}

---

##### `fixedBoost`<sup>Optional</sup> <a name="fixedBoost" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostAction.property.fixedBoost"></a>

```typescript
public readonly fixedBoost: number;
```

- *Type:* number

The fixed boost value to apply to the search results.

Positive values will increase the relevance of the results, while negative values will decrease the relevance. The value must be between -100 and 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#fixed_boost GoogleDiscoveryEngineControl#fixed_boost}

---

##### `interpolationBoostSpec`<sup>Optional</sup> <a name="interpolationBoostSpec" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostAction.property.interpolationBoostSpec"></a>

```typescript
public readonly interpolationBoostSpec: GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec">GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec</a>

interpolation_boost_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#interpolation_boost_spec GoogleDiscoveryEngineControl#interpolation_boost_spec}

---

### GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec <a name="GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec.Initializer"></a>

```typescript
import { googleDiscoveryEngineControl } from '@cdktn/provider-google-beta'

const googleDiscoveryEngineControlBoostActionInterpolationBoostSpec: googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec.property.attributeType">attributeType</a></code> | <code>string</code> | The attribute type to be used to determine the boost amount. Possible values: ["NUMERICAL", "FRESHNESS"]. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec.property.controlPoint">controlPoint</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint">GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint</a></code> | control_point block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec.property.fieldName">fieldName</a></code> | <code>string</code> | The name of the field whose value will be used to determine the boost amount. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec.property.interpolationType">interpolationType</a></code> | <code>string</code> | The interpolation type to be applied to connect the control points. Possible values: ["LINEAR"]. |

---

##### `attributeType`<sup>Optional</sup> <a name="attributeType" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec.property.attributeType"></a>

```typescript
public readonly attributeType: string;
```

- *Type:* string

The attribute type to be used to determine the boost amount. Possible values: ["NUMERICAL", "FRESHNESS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#attribute_type GoogleDiscoveryEngineControl#attribute_type}

---

##### `controlPoint`<sup>Optional</sup> <a name="controlPoint" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec.property.controlPoint"></a>

```typescript
public readonly controlPoint: GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint">GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint</a>

control_point block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#control_point GoogleDiscoveryEngineControl#control_point}

---

##### `fieldName`<sup>Optional</sup> <a name="fieldName" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec.property.fieldName"></a>

```typescript
public readonly fieldName: string;
```

- *Type:* string

The name of the field whose value will be used to determine the boost amount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#field_name GoogleDiscoveryEngineControl#field_name}

---

##### `interpolationType`<sup>Optional</sup> <a name="interpolationType" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec.property.interpolationType"></a>

```typescript
public readonly interpolationType: string;
```

- *Type:* string

The interpolation type to be applied to connect the control points. Possible values: ["LINEAR"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#interpolation_type GoogleDiscoveryEngineControl#interpolation_type}

---

### GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint <a name="GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint.Initializer"></a>

```typescript
import { googleDiscoveryEngineControl } from '@cdktn/provider-google-beta'

const googleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint: googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint.property.attributeValue">attributeValue</a></code> | <code>string</code> | The attribute value of the control point. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint.property.boostAmount">boostAmount</a></code> | <code>number</code> | The value between -1 to 1 by which to boost the score if the attributeValue evaluates to the value specified above. |

---

##### `attributeValue`<sup>Optional</sup> <a name="attributeValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint.property.attributeValue"></a>

```typescript
public readonly attributeValue: string;
```

- *Type:* string

The attribute value of the control point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#attribute_value GoogleDiscoveryEngineControl#attribute_value}

---

##### `boostAmount`<sup>Optional</sup> <a name="boostAmount" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint.property.boostAmount"></a>

```typescript
public readonly boostAmount: number;
```

- *Type:* number

The value between -1 to 1 by which to boost the score if the attributeValue evaluates to the value specified above.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#boost_amount GoogleDiscoveryEngineControl#boost_amount}

---

### GoogleDiscoveryEngineControlConditions <a name="GoogleDiscoveryEngineControlConditions" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditions.Initializer"></a>

```typescript
import { googleDiscoveryEngineControl } from '@cdktn/provider-google-beta'

const googleDiscoveryEngineControlConditions: googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditions.property.activeTimeRange">activeTimeRange</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRange">GoogleDiscoveryEngineControlConditionsActiveTimeRange</a>[]</code> | active_time_range block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditions.property.queryRegex">queryRegex</a></code> | <code>string</code> | The regular expression that the query must match for this condition to be met. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditions.property.queryTerms">queryTerms</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTerms">GoogleDiscoveryEngineControlConditionsQueryTerms</a>[]</code> | query_terms block. |

---

##### `activeTimeRange`<sup>Optional</sup> <a name="activeTimeRange" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditions.property.activeTimeRange"></a>

```typescript
public readonly activeTimeRange: IResolvable | GoogleDiscoveryEngineControlConditionsActiveTimeRange[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRange">GoogleDiscoveryEngineControlConditionsActiveTimeRange</a>[]

active_time_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#active_time_range GoogleDiscoveryEngineControl#active_time_range}

---

##### `queryRegex`<sup>Optional</sup> <a name="queryRegex" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditions.property.queryRegex"></a>

```typescript
public readonly queryRegex: string;
```

- *Type:* string

The regular expression that the query must match for this condition to be met.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#query_regex GoogleDiscoveryEngineControl#query_regex}

---

##### `queryTerms`<sup>Optional</sup> <a name="queryTerms" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditions.property.queryTerms"></a>

```typescript
public readonly queryTerms: IResolvable | GoogleDiscoveryEngineControlConditionsQueryTerms[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTerms">GoogleDiscoveryEngineControlConditionsQueryTerms</a>[]

query_terms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#query_terms GoogleDiscoveryEngineControl#query_terms}

---

### GoogleDiscoveryEngineControlConditionsActiveTimeRange <a name="GoogleDiscoveryEngineControlConditionsActiveTimeRange" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRange.Initializer"></a>

```typescript
import { googleDiscoveryEngineControl } from '@cdktn/provider-google-beta'

const googleDiscoveryEngineControlConditionsActiveTimeRange: googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRange.property.endTime">endTime</a></code> | <code>string</code> | The end time of the active time range. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRange.property.startTime">startTime</a></code> | <code>string</code> | The start time of the active time range. |

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRange.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

The end time of the active time range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#end_time GoogleDiscoveryEngineControl#end_time}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRange.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

The start time of the active time range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#start_time GoogleDiscoveryEngineControl#start_time}

---

### GoogleDiscoveryEngineControlConditionsQueryTerms <a name="GoogleDiscoveryEngineControlConditionsQueryTerms" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTerms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTerms.Initializer"></a>

```typescript
import { googleDiscoveryEngineControl } from '@cdktn/provider-google-beta'

const googleDiscoveryEngineControlConditionsQueryTerms: googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTerms = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTerms.property.fullMatch">fullMatch</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, the query term must be an exact match. Otherwise, the query term can be a partial match. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTerms.property.value">value</a></code> | <code>string</code> | The value of the query term. |

---

##### `fullMatch`<sup>Optional</sup> <a name="fullMatch" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTerms.property.fullMatch"></a>

```typescript
public readonly fullMatch: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, the query term must be an exact match. Otherwise, the query term can be a partial match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#full_match GoogleDiscoveryEngineControl#full_match}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTerms.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the query term.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#value GoogleDiscoveryEngineControl#value}

---

### GoogleDiscoveryEngineControlConfig <a name="GoogleDiscoveryEngineControlConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.Initializer"></a>

```typescript
import { googleDiscoveryEngineControl } from '@cdktn/provider-google-beta'

const googleDiscoveryEngineControlConfig: googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.controlId">controlId</a></code> | <code>string</code> | The unique id of the control. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.displayName">displayName</a></code> | <code>string</code> | The display name of the control. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.engineId">engineId</a></code> | <code>string</code> | The engine to add the control to. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.location">location</a></code> | <code>string</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.solutionType">solutionType</a></code> | <code>string</code> | The solution type that the control belongs to. Possible values: ["SOLUTION_TYPE_RECOMMENDATION", "SOLUTION_TYPE_SEARCH", "SOLUTION_TYPE_CHAT", "SOLUTION_TYPE_GENERATIVE_CHAT"]. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.boostAction">boostAction</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostAction">GoogleDiscoveryEngineControlBoostAction</a></code> | boost_action block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.collectionId">collectionId</a></code> | <code>string</code> | The collection ID. Currently only accepts "default_collection". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.conditions">conditions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditions">GoogleDiscoveryEngineControlConditions</a>[]</code> | conditions block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.filterAction">filterAction</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterAction">GoogleDiscoveryEngineControlFilterAction</a></code> | filter_action block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#id GoogleDiscoveryEngineControl#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#project GoogleDiscoveryEngineControl#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.promoteAction">promoteAction</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteAction">GoogleDiscoveryEngineControlPromoteAction</a></code> | promote_action block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.redirectAction">redirectAction</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectAction">GoogleDiscoveryEngineControlRedirectAction</a></code> | redirect_action block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.synonymsAction">synonymsAction</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsAction">GoogleDiscoveryEngineControlSynonymsAction</a></code> | synonyms_action block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeouts">GoogleDiscoveryEngineControlTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.useCases">useCases</a></code> | <code>string[]</code> | The use cases that the control is used for. Possible values: ["SEARCH_USE_CASE_SEARCH", "SEARCH_USE_CASE_BROWSE"]. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `controlId`<sup>Required</sup> <a name="controlId" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.controlId"></a>

```typescript
public readonly controlId: string;
```

- *Type:* string

The unique id of the control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#control_id GoogleDiscoveryEngineControl#control_id}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name of the control.

This field must be a UTF-8 encoded
string with a length limit of 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#display_name GoogleDiscoveryEngineControl#display_name}

---

##### `engineId`<sup>Required</sup> <a name="engineId" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.engineId"></a>

```typescript
public readonly engineId: string;
```

- *Type:* string

The engine to add the control to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#engine_id GoogleDiscoveryEngineControl#engine_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#location GoogleDiscoveryEngineControl#location}

---

##### `solutionType`<sup>Required</sup> <a name="solutionType" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.solutionType"></a>

```typescript
public readonly solutionType: string;
```

- *Type:* string

The solution type that the control belongs to. Possible values: ["SOLUTION_TYPE_RECOMMENDATION", "SOLUTION_TYPE_SEARCH", "SOLUTION_TYPE_CHAT", "SOLUTION_TYPE_GENERATIVE_CHAT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#solution_type GoogleDiscoveryEngineControl#solution_type}

---

##### `boostAction`<sup>Optional</sup> <a name="boostAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.boostAction"></a>

```typescript
public readonly boostAction: GoogleDiscoveryEngineControlBoostAction;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostAction">GoogleDiscoveryEngineControlBoostAction</a>

boost_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#boost_action GoogleDiscoveryEngineControl#boost_action}

---

##### `collectionId`<sup>Optional</sup> <a name="collectionId" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.collectionId"></a>

```typescript
public readonly collectionId: string;
```

- *Type:* string

The collection ID. Currently only accepts "default_collection".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#collection_id GoogleDiscoveryEngineControl#collection_id}

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.conditions"></a>

```typescript
public readonly conditions: IResolvable | GoogleDiscoveryEngineControlConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditions">GoogleDiscoveryEngineControlConditions</a>[]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#conditions GoogleDiscoveryEngineControl#conditions}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#deletion_policy GoogleDiscoveryEngineControl#deletion_policy}

---

##### `filterAction`<sup>Optional</sup> <a name="filterAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.filterAction"></a>

```typescript
public readonly filterAction: GoogleDiscoveryEngineControlFilterAction;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterAction">GoogleDiscoveryEngineControlFilterAction</a>

filter_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#filter_action GoogleDiscoveryEngineControl#filter_action}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#id GoogleDiscoveryEngineControl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#project GoogleDiscoveryEngineControl#project}.

---

##### `promoteAction`<sup>Optional</sup> <a name="promoteAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.promoteAction"></a>

```typescript
public readonly promoteAction: GoogleDiscoveryEngineControlPromoteAction;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteAction">GoogleDiscoveryEngineControlPromoteAction</a>

promote_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#promote_action GoogleDiscoveryEngineControl#promote_action}

---

##### `redirectAction`<sup>Optional</sup> <a name="redirectAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.redirectAction"></a>

```typescript
public readonly redirectAction: GoogleDiscoveryEngineControlRedirectAction;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectAction">GoogleDiscoveryEngineControlRedirectAction</a>

redirect_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#redirect_action GoogleDiscoveryEngineControl#redirect_action}

---

##### `synonymsAction`<sup>Optional</sup> <a name="synonymsAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.synonymsAction"></a>

```typescript
public readonly synonymsAction: GoogleDiscoveryEngineControlSynonymsAction;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsAction">GoogleDiscoveryEngineControlSynonymsAction</a>

synonyms_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#synonyms_action GoogleDiscoveryEngineControl#synonyms_action}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDiscoveryEngineControlTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeouts">GoogleDiscoveryEngineControlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#timeouts GoogleDiscoveryEngineControl#timeouts}

---

##### `useCases`<sup>Optional</sup> <a name="useCases" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConfig.property.useCases"></a>

```typescript
public readonly useCases: string[];
```

- *Type:* string[]

The use cases that the control is used for. Possible values: ["SEARCH_USE_CASE_SEARCH", "SEARCH_USE_CASE_BROWSE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#use_cases GoogleDiscoveryEngineControl#use_cases}

---

### GoogleDiscoveryEngineControlFilterAction <a name="GoogleDiscoveryEngineControlFilterAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterAction.Initializer"></a>

```typescript
import { googleDiscoveryEngineControl } from '@cdktn/provider-google-beta'

const googleDiscoveryEngineControlFilterAction: googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterAction.property.dataStore">dataStore</a></code> | <code>string</code> | The data store to filter. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterAction.property.filter">filter</a></code> | <code>string</code> | The filter to apply to the search results. |

---

##### `dataStore`<sup>Required</sup> <a name="dataStore" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterAction.property.dataStore"></a>

```typescript
public readonly dataStore: string;
```

- *Type:* string

The data store to filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#data_store GoogleDiscoveryEngineControl#data_store}

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterAction.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

The filter to apply to the search results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#filter GoogleDiscoveryEngineControl#filter}

---

### GoogleDiscoveryEngineControlPromoteAction <a name="GoogleDiscoveryEngineControlPromoteAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteAction.Initializer"></a>

```typescript
import { googleDiscoveryEngineControl } from '@cdktn/provider-google-beta'

const googleDiscoveryEngineControlPromoteAction: googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteAction.property.dataStore">dataStore</a></code> | <code>string</code> | The data store to promote. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteAction.property.searchLinkPromotion">searchLinkPromotion</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion">GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion</a></code> | search_link_promotion block. |

---

##### `dataStore`<sup>Required</sup> <a name="dataStore" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteAction.property.dataStore"></a>

```typescript
public readonly dataStore: string;
```

- *Type:* string

The data store to promote.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#data_store GoogleDiscoveryEngineControl#data_store}

---

##### `searchLinkPromotion`<sup>Required</sup> <a name="searchLinkPromotion" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteAction.property.searchLinkPromotion"></a>

```typescript
public readonly searchLinkPromotion: GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion">GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion</a>

search_link_promotion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#search_link_promotion GoogleDiscoveryEngineControl#search_link_promotion}

---

### GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion <a name="GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion.Initializer"></a>

```typescript
import { googleDiscoveryEngineControl } from '@cdktn/provider-google-beta'

const googleDiscoveryEngineControlPromoteActionSearchLinkPromotion: googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion.property.title">title</a></code> | <code>string</code> | The title of the promoted link. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion.property.description">description</a></code> | <code>string</code> | The description of the promoted link. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion.property.document">document</a></code> | <code>string</code> | The document to promote. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Return promotions for basic site search. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion.property.imageUri">imageUri</a></code> | <code>string</code> | The image URI of the promoted link. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion.property.uri">uri</a></code> | <code>string</code> | The URI to promote. |

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

The title of the promoted link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#title GoogleDiscoveryEngineControl#title}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the promoted link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#description GoogleDiscoveryEngineControl#description}

---

##### `document`<sup>Optional</sup> <a name="document" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion.property.document"></a>

```typescript
public readonly document: string;
```

- *Type:* string

The document to promote.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#document GoogleDiscoveryEngineControl#document}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Return promotions for basic site search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#enabled GoogleDiscoveryEngineControl#enabled}

---

##### `imageUri`<sup>Optional</sup> <a name="imageUri" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion.property.imageUri"></a>

```typescript
public readonly imageUri: string;
```

- *Type:* string

The image URI of the promoted link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#image_uri GoogleDiscoveryEngineControl#image_uri}

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

The URI to promote.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#uri GoogleDiscoveryEngineControl#uri}

---

### GoogleDiscoveryEngineControlRedirectAction <a name="GoogleDiscoveryEngineControlRedirectAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectAction.Initializer"></a>

```typescript
import { googleDiscoveryEngineControl } from '@cdktn/provider-google-beta'

const googleDiscoveryEngineControlRedirectAction: googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectAction.property.redirectUri">redirectUri</a></code> | <code>string</code> | The URI to redirect to. |

---

##### `redirectUri`<sup>Required</sup> <a name="redirectUri" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectAction.property.redirectUri"></a>

```typescript
public readonly redirectUri: string;
```

- *Type:* string

The URI to redirect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#redirect_uri GoogleDiscoveryEngineControl#redirect_uri}

---

### GoogleDiscoveryEngineControlSynonymsAction <a name="GoogleDiscoveryEngineControlSynonymsAction" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsAction.Initializer"></a>

```typescript
import { googleDiscoveryEngineControl } from '@cdktn/provider-google-beta'

const googleDiscoveryEngineControlSynonymsAction: googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsAction.property.synonyms">synonyms</a></code> | <code>string[]</code> | The synonyms to apply to the search results. |

---

##### `synonyms`<sup>Optional</sup> <a name="synonyms" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsAction.property.synonyms"></a>

```typescript
public readonly synonyms: string[];
```

- *Type:* string[]

The synonyms to apply to the search results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#synonyms GoogleDiscoveryEngineControl#synonyms}

---

### GoogleDiscoveryEngineControlTimeouts <a name="GoogleDiscoveryEngineControlTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeouts.Initializer"></a>

```typescript
import { googleDiscoveryEngineControl } from '@cdktn/provider-google-beta'

const googleDiscoveryEngineControlTimeouts: googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#create GoogleDiscoveryEngineControl#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#delete GoogleDiscoveryEngineControl#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#update GoogleDiscoveryEngineControl#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#create GoogleDiscoveryEngineControl#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#delete GoogleDiscoveryEngineControl#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_discovery_engine_control#update GoogleDiscoveryEngineControl#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference <a name="GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.Initializer"></a>

```typescript
import { googleDiscoveryEngineControl } from '@cdktn/provider-google-beta'

new googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.resetAttributeValue">resetAttributeValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.resetBoostAmount">resetBoostAmount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttributeValue` <a name="resetAttributeValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.resetAttributeValue"></a>

```typescript
public resetAttributeValue(): void
```

##### `resetBoostAmount` <a name="resetBoostAmount" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.resetBoostAmount"></a>

```typescript
public resetBoostAmount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.attributeValueInput">attributeValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.boostAmountInput">boostAmountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.attributeValue">attributeValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.boostAmount">boostAmount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint">GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributeValueInput`<sup>Optional</sup> <a name="attributeValueInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.attributeValueInput"></a>

```typescript
public readonly attributeValueInput: string;
```

- *Type:* string

---

##### `boostAmountInput`<sup>Optional</sup> <a name="boostAmountInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.boostAmountInput"></a>

```typescript
public readonly boostAmountInput: number;
```

- *Type:* number

---

##### `attributeValue`<sup>Required</sup> <a name="attributeValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.attributeValue"></a>

```typescript
public readonly attributeValue: string;
```

- *Type:* string

---

##### `boostAmount`<sup>Required</sup> <a name="boostAmount" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.boostAmount"></a>

```typescript
public readonly boostAmount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint">GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint</a>

---


### GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference <a name="GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.Initializer"></a>

```typescript
import { googleDiscoveryEngineControl } from '@cdktn/provider-google-beta'

new googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.putControlPoint">putControlPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resetAttributeType">resetAttributeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resetControlPoint">resetControlPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resetFieldName">resetFieldName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resetInterpolationType">resetInterpolationType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putControlPoint` <a name="putControlPoint" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.putControlPoint"></a>

```typescript
public putControlPoint(value: GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.putControlPoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint">GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint</a>

---

##### `resetAttributeType` <a name="resetAttributeType" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resetAttributeType"></a>

```typescript
public resetAttributeType(): void
```

##### `resetControlPoint` <a name="resetControlPoint" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resetControlPoint"></a>

```typescript
public resetControlPoint(): void
```

##### `resetFieldName` <a name="resetFieldName" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resetFieldName"></a>

```typescript
public resetFieldName(): void
```

##### `resetInterpolationType` <a name="resetInterpolationType" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.resetInterpolationType"></a>

```typescript
public resetInterpolationType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.controlPoint">controlPoint</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference">GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.attributeTypeInput">attributeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.controlPointInput">controlPointInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint">GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.fieldNameInput">fieldNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.interpolationTypeInput">interpolationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.attributeType">attributeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.fieldName">fieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.interpolationType">interpolationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec">GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `controlPoint`<sup>Required</sup> <a name="controlPoint" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.controlPoint"></a>

```typescript
public readonly controlPoint: GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference">GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPointOutputReference</a>

---

##### `attributeTypeInput`<sup>Optional</sup> <a name="attributeTypeInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.attributeTypeInput"></a>

```typescript
public readonly attributeTypeInput: string;
```

- *Type:* string

---

##### `controlPointInput`<sup>Optional</sup> <a name="controlPointInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.controlPointInput"></a>

```typescript
public readonly controlPointInput: GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint">GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecControlPoint</a>

---

##### `fieldNameInput`<sup>Optional</sup> <a name="fieldNameInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.fieldNameInput"></a>

```typescript
public readonly fieldNameInput: string;
```

- *Type:* string

---

##### `interpolationTypeInput`<sup>Optional</sup> <a name="interpolationTypeInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.interpolationTypeInput"></a>

```typescript
public readonly interpolationTypeInput: string;
```

- *Type:* string

---

##### `attributeType`<sup>Required</sup> <a name="attributeType" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.attributeType"></a>

```typescript
public readonly attributeType: string;
```

- *Type:* string

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.fieldName"></a>

```typescript
public readonly fieldName: string;
```

- *Type:* string

---

##### `interpolationType`<sup>Required</sup> <a name="interpolationType" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.interpolationType"></a>

```typescript
public readonly interpolationType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec">GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec</a>

---


### GoogleDiscoveryEngineControlBoostActionOutputReference <a name="GoogleDiscoveryEngineControlBoostActionOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.Initializer"></a>

```typescript
import { googleDiscoveryEngineControl } from '@cdktn/provider-google-beta'

new googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.putInterpolationBoostSpec">putInterpolationBoostSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.resetFixedBoost">resetFixedBoost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.resetInterpolationBoostSpec">resetInterpolationBoostSpec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInterpolationBoostSpec` <a name="putInterpolationBoostSpec" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.putInterpolationBoostSpec"></a>

```typescript
public putInterpolationBoostSpec(value: GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.putInterpolationBoostSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec">GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec</a>

---

##### `resetFixedBoost` <a name="resetFixedBoost" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.resetFixedBoost"></a>

```typescript
public resetFixedBoost(): void
```

##### `resetInterpolationBoostSpec` <a name="resetInterpolationBoostSpec" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.resetInterpolationBoostSpec"></a>

```typescript
public resetInterpolationBoostSpec(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.interpolationBoostSpec">interpolationBoostSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference">GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.dataStoreInput">dataStoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.fixedBoostInput">fixedBoostInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.interpolationBoostSpecInput">interpolationBoostSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec">GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.dataStore">dataStore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.fixedBoost">fixedBoost</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostAction">GoogleDiscoveryEngineControlBoostAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `interpolationBoostSpec`<sup>Required</sup> <a name="interpolationBoostSpec" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.interpolationBoostSpec"></a>

```typescript
public readonly interpolationBoostSpec: GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference">GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpecOutputReference</a>

---

##### `dataStoreInput`<sup>Optional</sup> <a name="dataStoreInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.dataStoreInput"></a>

```typescript
public readonly dataStoreInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `fixedBoostInput`<sup>Optional</sup> <a name="fixedBoostInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.fixedBoostInput"></a>

```typescript
public readonly fixedBoostInput: number;
```

- *Type:* number

---

##### `interpolationBoostSpecInput`<sup>Optional</sup> <a name="interpolationBoostSpecInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.interpolationBoostSpecInput"></a>

```typescript
public readonly interpolationBoostSpecInput: GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec">GoogleDiscoveryEngineControlBoostActionInterpolationBoostSpec</a>

---

##### `dataStore`<sup>Required</sup> <a name="dataStore" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.dataStore"></a>

```typescript
public readonly dataStore: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `fixedBoost`<sup>Required</sup> <a name="fixedBoost" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.fixedBoost"></a>

```typescript
public readonly fixedBoost: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDiscoveryEngineControlBoostAction;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlBoostAction">GoogleDiscoveryEngineControlBoostAction</a>

---


### GoogleDiscoveryEngineControlConditionsActiveTimeRangeList <a name="GoogleDiscoveryEngineControlConditionsActiveTimeRangeList" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.Initializer"></a>

```typescript
import { googleDiscoveryEngineControl } from '@cdktn/provider-google-beta'

new googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.get"></a>

```typescript
public get(index: number): GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRange">GoogleDiscoveryEngineControlConditionsActiveTimeRange</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDiscoveryEngineControlConditionsActiveTimeRange[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRange">GoogleDiscoveryEngineControlConditionsActiveTimeRange</a>[]

---


### GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference <a name="GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer"></a>

```typescript
import { googleDiscoveryEngineControl } from '@cdktn/provider-google-beta'

new googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndTime` <a name="resetEndTime" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.resetEndTime"></a>

```typescript
public resetEndTime(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.resetStartTime"></a>

```typescript
public resetStartTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRange">GoogleDiscoveryEngineControlConditionsActiveTimeRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDiscoveryEngineControlConditionsActiveTimeRange;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRange">GoogleDiscoveryEngineControlConditionsActiveTimeRange</a>

---


### GoogleDiscoveryEngineControlConditionsList <a name="GoogleDiscoveryEngineControlConditionsList" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.Initializer"></a>

```typescript
import { googleDiscoveryEngineControl } from '@cdktn/provider-google-beta'

new googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.get"></a>

```typescript
public get(index: number): GoogleDiscoveryEngineControlConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditions">GoogleDiscoveryEngineControlConditions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDiscoveryEngineControlConditions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditions">GoogleDiscoveryEngineControlConditions</a>[]

---


### GoogleDiscoveryEngineControlConditionsOutputReference <a name="GoogleDiscoveryEngineControlConditionsOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.Initializer"></a>

```typescript
import { googleDiscoveryEngineControl } from '@cdktn/provider-google-beta'

new googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.putActiveTimeRange">putActiveTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.putQueryTerms">putQueryTerms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.resetActiveTimeRange">resetActiveTimeRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.resetQueryRegex">resetQueryRegex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.resetQueryTerms">resetQueryTerms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActiveTimeRange` <a name="putActiveTimeRange" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.putActiveTimeRange"></a>

```typescript
public putActiveTimeRange(value: IResolvable | GoogleDiscoveryEngineControlConditionsActiveTimeRange[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.putActiveTimeRange.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRange">GoogleDiscoveryEngineControlConditionsActiveTimeRange</a>[]

---

##### `putQueryTerms` <a name="putQueryTerms" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.putQueryTerms"></a>

```typescript
public putQueryTerms(value: IResolvable | GoogleDiscoveryEngineControlConditionsQueryTerms[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.putQueryTerms.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTerms">GoogleDiscoveryEngineControlConditionsQueryTerms</a>[]

---

##### `resetActiveTimeRange` <a name="resetActiveTimeRange" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.resetActiveTimeRange"></a>

```typescript
public resetActiveTimeRange(): void
```

##### `resetQueryRegex` <a name="resetQueryRegex" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.resetQueryRegex"></a>

```typescript
public resetQueryRegex(): void
```

##### `resetQueryTerms` <a name="resetQueryTerms" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.resetQueryTerms"></a>

```typescript
public resetQueryTerms(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.property.activeTimeRange">activeTimeRange</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList">GoogleDiscoveryEngineControlConditionsActiveTimeRangeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.property.queryTerms">queryTerms</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList">GoogleDiscoveryEngineControlConditionsQueryTermsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.property.activeTimeRangeInput">activeTimeRangeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRange">GoogleDiscoveryEngineControlConditionsActiveTimeRange</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.property.queryRegexInput">queryRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.property.queryTermsInput">queryTermsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTerms">GoogleDiscoveryEngineControlConditionsQueryTerms</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.property.queryRegex">queryRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditions">GoogleDiscoveryEngineControlConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activeTimeRange`<sup>Required</sup> <a name="activeTimeRange" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.property.activeTimeRange"></a>

```typescript
public readonly activeTimeRange: GoogleDiscoveryEngineControlConditionsActiveTimeRangeList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRangeList">GoogleDiscoveryEngineControlConditionsActiveTimeRangeList</a>

---

##### `queryTerms`<sup>Required</sup> <a name="queryTerms" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.property.queryTerms"></a>

```typescript
public readonly queryTerms: GoogleDiscoveryEngineControlConditionsQueryTermsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList">GoogleDiscoveryEngineControlConditionsQueryTermsList</a>

---

##### `activeTimeRangeInput`<sup>Optional</sup> <a name="activeTimeRangeInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.property.activeTimeRangeInput"></a>

```typescript
public readonly activeTimeRangeInput: IResolvable | GoogleDiscoveryEngineControlConditionsActiveTimeRange[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsActiveTimeRange">GoogleDiscoveryEngineControlConditionsActiveTimeRange</a>[]

---

##### `queryRegexInput`<sup>Optional</sup> <a name="queryRegexInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.property.queryRegexInput"></a>

```typescript
public readonly queryRegexInput: string;
```

- *Type:* string

---

##### `queryTermsInput`<sup>Optional</sup> <a name="queryTermsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.property.queryTermsInput"></a>

```typescript
public readonly queryTermsInput: IResolvable | GoogleDiscoveryEngineControlConditionsQueryTerms[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTerms">GoogleDiscoveryEngineControlConditionsQueryTerms</a>[]

---

##### `queryRegex`<sup>Required</sup> <a name="queryRegex" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.property.queryRegex"></a>

```typescript
public readonly queryRegex: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDiscoveryEngineControlConditions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditions">GoogleDiscoveryEngineControlConditions</a>

---


### GoogleDiscoveryEngineControlConditionsQueryTermsList <a name="GoogleDiscoveryEngineControlConditionsQueryTermsList" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.Initializer"></a>

```typescript
import { googleDiscoveryEngineControl } from '@cdktn/provider-google-beta'

new googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.get"></a>

```typescript
public get(index: number): GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTerms">GoogleDiscoveryEngineControlConditionsQueryTerms</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDiscoveryEngineControlConditionsQueryTerms[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTerms">GoogleDiscoveryEngineControlConditionsQueryTerms</a>[]

---


### GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference <a name="GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer"></a>

```typescript
import { googleDiscoveryEngineControl } from '@cdktn/provider-google-beta'

new googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.resetFullMatch">resetFullMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFullMatch` <a name="resetFullMatch" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.resetFullMatch"></a>

```typescript
public resetFullMatch(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.property.fullMatchInput">fullMatchInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.property.fullMatch">fullMatch</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTerms">GoogleDiscoveryEngineControlConditionsQueryTerms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fullMatchInput`<sup>Optional</sup> <a name="fullMatchInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.property.fullMatchInput"></a>

```typescript
public readonly fullMatchInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `fullMatch`<sup>Required</sup> <a name="fullMatch" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.property.fullMatch"></a>

```typescript
public readonly fullMatch: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTermsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDiscoveryEngineControlConditionsQueryTerms;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlConditionsQueryTerms">GoogleDiscoveryEngineControlConditionsQueryTerms</a>

---


### GoogleDiscoveryEngineControlFilterActionOutputReference <a name="GoogleDiscoveryEngineControlFilterActionOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.Initializer"></a>

```typescript
import { googleDiscoveryEngineControl } from '@cdktn/provider-google-beta'

new googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.property.dataStoreInput">dataStoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.property.dataStore">dataStore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterAction">GoogleDiscoveryEngineControlFilterAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataStoreInput`<sup>Optional</sup> <a name="dataStoreInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.property.dataStoreInput"></a>

```typescript
public readonly dataStoreInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `dataStore`<sup>Required</sup> <a name="dataStore" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.property.dataStore"></a>

```typescript
public readonly dataStore: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDiscoveryEngineControlFilterAction;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlFilterAction">GoogleDiscoveryEngineControlFilterAction</a>

---


### GoogleDiscoveryEngineControlPromoteActionOutputReference <a name="GoogleDiscoveryEngineControlPromoteActionOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.Initializer"></a>

```typescript
import { googleDiscoveryEngineControl } from '@cdktn/provider-google-beta'

new googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.putSearchLinkPromotion">putSearchLinkPromotion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSearchLinkPromotion` <a name="putSearchLinkPromotion" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.putSearchLinkPromotion"></a>

```typescript
public putSearchLinkPromotion(value: GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.putSearchLinkPromotion.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion">GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.property.searchLinkPromotion">searchLinkPromotion</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference">GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.property.dataStoreInput">dataStoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.property.searchLinkPromotionInput">searchLinkPromotionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion">GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.property.dataStore">dataStore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteAction">GoogleDiscoveryEngineControlPromoteAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `searchLinkPromotion`<sup>Required</sup> <a name="searchLinkPromotion" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.property.searchLinkPromotion"></a>

```typescript
public readonly searchLinkPromotion: GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference">GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference</a>

---

##### `dataStoreInput`<sup>Optional</sup> <a name="dataStoreInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.property.dataStoreInput"></a>

```typescript
public readonly dataStoreInput: string;
```

- *Type:* string

---

##### `searchLinkPromotionInput`<sup>Optional</sup> <a name="searchLinkPromotionInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.property.searchLinkPromotionInput"></a>

```typescript
public readonly searchLinkPromotionInput: GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion">GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion</a>

---

##### `dataStore`<sup>Required</sup> <a name="dataStore" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.property.dataStore"></a>

```typescript
public readonly dataStore: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDiscoveryEngineControlPromoteAction;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteAction">GoogleDiscoveryEngineControlPromoteAction</a>

---


### GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference <a name="GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.Initializer"></a>

```typescript
import { googleDiscoveryEngineControl } from '@cdktn/provider-google-beta'

new googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetDocument">resetDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetImageUri">resetImageUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetUri">resetUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDocument` <a name="resetDocument" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetDocument"></a>

```typescript
public resetDocument(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetImageUri` <a name="resetImageUri" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetImageUri"></a>

```typescript
public resetImageUri(): void
```

##### `resetUri` <a name="resetUri" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.resetUri"></a>

```typescript
public resetUri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.documentInput">documentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.imageUriInput">imageUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.document">document</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.imageUri">imageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion">GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `documentInput`<sup>Optional</sup> <a name="documentInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.documentInput"></a>

```typescript
public readonly documentInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `imageUriInput`<sup>Optional</sup> <a name="imageUriInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.imageUriInput"></a>

```typescript
public readonly imageUriInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `document`<sup>Required</sup> <a name="document" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.document"></a>

```typescript
public readonly document: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `imageUri`<sup>Required</sup> <a name="imageUri" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.imageUri"></a>

```typescript
public readonly imageUri: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion">GoogleDiscoveryEngineControlPromoteActionSearchLinkPromotion</a>

---


### GoogleDiscoveryEngineControlRedirectActionOutputReference <a name="GoogleDiscoveryEngineControlRedirectActionOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.Initializer"></a>

```typescript
import { googleDiscoveryEngineControl } from '@cdktn/provider-google-beta'

new googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.property.redirectUriInput">redirectUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.property.redirectUri">redirectUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectAction">GoogleDiscoveryEngineControlRedirectAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `redirectUriInput`<sup>Optional</sup> <a name="redirectUriInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.property.redirectUriInput"></a>

```typescript
public readonly redirectUriInput: string;
```

- *Type:* string

---

##### `redirectUri`<sup>Required</sup> <a name="redirectUri" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.property.redirectUri"></a>

```typescript
public readonly redirectUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDiscoveryEngineControlRedirectAction;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlRedirectAction">GoogleDiscoveryEngineControlRedirectAction</a>

---


### GoogleDiscoveryEngineControlSynonymsActionOutputReference <a name="GoogleDiscoveryEngineControlSynonymsActionOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.Initializer"></a>

```typescript
import { googleDiscoveryEngineControl } from '@cdktn/provider-google-beta'

new googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.resetSynonyms">resetSynonyms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSynonyms` <a name="resetSynonyms" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.resetSynonyms"></a>

```typescript
public resetSynonyms(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.property.synonymsInput">synonymsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.property.synonyms">synonyms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsAction">GoogleDiscoveryEngineControlSynonymsAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `synonymsInput`<sup>Optional</sup> <a name="synonymsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.property.synonymsInput"></a>

```typescript
public readonly synonymsInput: string[];
```

- *Type:* string[]

---

##### `synonyms`<sup>Required</sup> <a name="synonyms" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.property.synonyms"></a>

```typescript
public readonly synonyms: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDiscoveryEngineControlSynonymsAction;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlSynonymsAction">GoogleDiscoveryEngineControlSynonymsAction</a>

---


### GoogleDiscoveryEngineControlTimeoutsOutputReference <a name="GoogleDiscoveryEngineControlTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleDiscoveryEngineControl } from '@cdktn/provider-google-beta'

new googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeouts">GoogleDiscoveryEngineControlTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDiscoveryEngineControlTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineControl.GoogleDiscoveryEngineControlTimeouts">GoogleDiscoveryEngineControlTimeouts</a>

---



