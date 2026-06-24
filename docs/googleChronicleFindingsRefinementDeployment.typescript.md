# `googleChronicleFindingsRefinementDeployment` Submodule <a name="`googleChronicleFindingsRefinementDeployment` Submodule" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleChronicleFindingsRefinementDeployment <a name="GoogleChronicleFindingsRefinementDeployment" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment google_chronicle_findings_refinement_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer"></a>

```typescript
import { googleChronicleFindingsRefinementDeployment } from '@cdktn/provider-google-beta'

new googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment(scope: Construct, id: string, config: GoogleChronicleFindingsRefinementDeploymentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig">GoogleChronicleFindingsRefinementDeploymentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig">GoogleChronicleFindingsRefinementDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.putDetectionExclusionApplication">putDetectionExclusionApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.resetArchived">resetArchived</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.resetDetectionExclusionApplication">resetDetectionExclusionApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDetectionExclusionApplication` <a name="putDetectionExclusionApplication" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.putDetectionExclusionApplication"></a>

```typescript
public putDetectionExclusionApplication(value: GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.putDetectionExclusionApplication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication">GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleChronicleFindingsRefinementDeploymentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeouts">GoogleChronicleFindingsRefinementDeploymentTimeouts</a>

---

##### `resetArchived` <a name="resetArchived" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.resetArchived"></a>

```typescript
public resetArchived(): void
```

##### `resetDetectionExclusionApplication` <a name="resetDetectionExclusionApplication" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.resetDetectionExclusionApplication"></a>

```typescript
public resetDetectionExclusionApplication(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleChronicleFindingsRefinementDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.isConstruct"></a>

```typescript
import { googleChronicleFindingsRefinementDeployment } from '@cdktn/provider-google-beta'

googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.isTerraformElement"></a>

```typescript
import { googleChronicleFindingsRefinementDeployment } from '@cdktn/provider-google-beta'

googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.isTerraformResource"></a>

```typescript
import { googleChronicleFindingsRefinementDeployment } from '@cdktn/provider-google-beta'

googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.generateConfigForImport"></a>

```typescript
import { googleChronicleFindingsRefinementDeployment } from '@cdktn/provider-google-beta'

googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleChronicleFindingsRefinementDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleChronicleFindingsRefinementDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleChronicleFindingsRefinementDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleChronicleFindingsRefinementDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.detectionExclusionApplication">detectionExclusionApplication</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference">GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference">GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.archivedInput">archivedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.detectionExclusionApplicationInput">detectionExclusionApplicationInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication">GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.findingsRefinementInput">findingsRefinementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.instanceInput">instanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeouts">GoogleChronicleFindingsRefinementDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.archived">archived</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.findingsRefinement">findingsRefinement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.instance">instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `detectionExclusionApplication`<sup>Required</sup> <a name="detectionExclusionApplication" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.detectionExclusionApplication"></a>

```typescript
public readonly detectionExclusionApplication: GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference">GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference">GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `archivedInput`<sup>Optional</sup> <a name="archivedInput" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.archivedInput"></a>

```typescript
public readonly archivedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `detectionExclusionApplicationInput`<sup>Optional</sup> <a name="detectionExclusionApplicationInput" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.detectionExclusionApplicationInput"></a>

```typescript
public readonly detectionExclusionApplicationInput: GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication">GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `findingsRefinementInput`<sup>Optional</sup> <a name="findingsRefinementInput" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.findingsRefinementInput"></a>

```typescript
public readonly findingsRefinementInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.instanceInput"></a>

```typescript
public readonly instanceInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleChronicleFindingsRefinementDeploymentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeouts">GoogleChronicleFindingsRefinementDeploymentTimeouts</a>

---

##### `archived`<sup>Required</sup> <a name="archived" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.archived"></a>

```typescript
public readonly archived: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `findingsRefinement`<sup>Required</sup> <a name="findingsRefinement" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.findingsRefinement"></a>

```typescript
public readonly findingsRefinement: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeployment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleChronicleFindingsRefinementDeploymentConfig <a name="GoogleChronicleFindingsRefinementDeploymentConfig" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.Initializer"></a>

```typescript
import { googleChronicleFindingsRefinementDeployment } from '@cdktn/provider-google-beta'

const googleChronicleFindingsRefinementDeploymentConfig: googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.findingsRefinement">findingsRefinement</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.instance">instance</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.archived">archived</a></code> | <code>boolean \| cdktn.IResolvable</code> | The archive state of the findings refinement deployment. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.detectionExclusionApplication">detectionExclusionApplication</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication">GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication</a></code> | detection_exclusion_application block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the findings refinement is currently deployed continuously against incoming findings. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#id GoogleChronicleFindingsRefinementDeployment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#project GoogleChronicleFindingsRefinementDeployment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeouts">GoogleChronicleFindingsRefinementDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `findingsRefinement`<sup>Required</sup> <a name="findingsRefinement" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.findingsRefinement"></a>

```typescript
public readonly findingsRefinement: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#findings_refinement GoogleChronicleFindingsRefinementDeployment#findings_refinement}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#instance GoogleChronicleFindingsRefinementDeployment#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#location GoogleChronicleFindingsRefinementDeployment#location}

---

##### `archived`<sup>Optional</sup> <a name="archived" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.archived"></a>

```typescript
public readonly archived: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

The archive state of the findings refinement deployment.

Cannot be set to true unless enabled is set to false.
If currently set to true, enabled cannot be updated to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#archived GoogleChronicleFindingsRefinementDeployment#archived}

---

##### `detectionExclusionApplication`<sup>Optional</sup> <a name="detectionExclusionApplication" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.detectionExclusionApplication"></a>

```typescript
public readonly detectionExclusionApplication: GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication">GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication</a>

detection_exclusion_application block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#detection_exclusion_application GoogleChronicleFindingsRefinementDeployment#detection_exclusion_application}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the findings refinement is currently deployed continuously against incoming findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#enabled GoogleChronicleFindingsRefinementDeployment#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#id GoogleChronicleFindingsRefinementDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#project GoogleChronicleFindingsRefinementDeployment#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleChronicleFindingsRefinementDeploymentTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeouts">GoogleChronicleFindingsRefinementDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#timeouts GoogleChronicleFindingsRefinementDeployment#timeouts}

---

### GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication <a name="GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication.Initializer"></a>

```typescript
import { googleChronicleFindingsRefinementDeployment } from '@cdktn/provider-google-beta'

const googleChronicleFindingsRefinementDeploymentDetectionExclusionApplication: googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication.property.curatedRules">curatedRules</a></code> | <code>string[]</code> | The CuratedRules this detection exclusion applies to. Format: projects/{project}/locations/{location}/instances/{instance}/curatedRules/{rule}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication.property.curatedRuleSets">curatedRuleSets</a></code> | <code>string[]</code> | The CuratedRuleSets this detection exclusion applies to. Format: projects/{project}/locations/{location}/instances/{instance}/curatedRuleSetCategories/{category}/curatedRuleSets/{rule_set}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication.property.rules">rules</a></code> | <code>string[]</code> | The Rules this detection exclusion applies to. Format: projects/{project}/locations/{location}/instances/{instance}/rules/{rule}. |

---

##### `curatedRules`<sup>Optional</sup> <a name="curatedRules" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication.property.curatedRules"></a>

```typescript
public readonly curatedRules: string[];
```

- *Type:* string[]

The CuratedRules this detection exclusion applies to. Format: projects/{project}/locations/{location}/instances/{instance}/curatedRules/{rule}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#curated_rules GoogleChronicleFindingsRefinementDeployment#curated_rules}

---

##### `curatedRuleSets`<sup>Optional</sup> <a name="curatedRuleSets" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication.property.curatedRuleSets"></a>

```typescript
public readonly curatedRuleSets: string[];
```

- *Type:* string[]

The CuratedRuleSets this detection exclusion applies to. Format: projects/{project}/locations/{location}/instances/{instance}/curatedRuleSetCategories/{category}/curatedRuleSets/{rule_set}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#curated_rule_sets GoogleChronicleFindingsRefinementDeployment#curated_rule_sets}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication.property.rules"></a>

```typescript
public readonly rules: string[];
```

- *Type:* string[]

The Rules this detection exclusion applies to. Format: projects/{project}/locations/{location}/instances/{instance}/rules/{rule}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#rules GoogleChronicleFindingsRefinementDeployment#rules}

---

### GoogleChronicleFindingsRefinementDeploymentTimeouts <a name="GoogleChronicleFindingsRefinementDeploymentTimeouts" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeouts.Initializer"></a>

```typescript
import { googleChronicleFindingsRefinementDeployment } from '@cdktn/provider-google-beta'

const googleChronicleFindingsRefinementDeploymentTimeouts: googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#create GoogleChronicleFindingsRefinementDeployment#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#delete GoogleChronicleFindingsRefinementDeployment#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#update GoogleChronicleFindingsRefinementDeployment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#create GoogleChronicleFindingsRefinementDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#delete GoogleChronicleFindingsRefinementDeployment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_chronicle_findings_refinement_deployment#update GoogleChronicleFindingsRefinementDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference <a name="GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.Initializer"></a>

```typescript
import { googleChronicleFindingsRefinementDeployment } from '@cdktn/provider-google-beta'

new googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resetCuratedRules">resetCuratedRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resetCuratedRuleSets">resetCuratedRuleSets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resetRules">resetRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCuratedRules` <a name="resetCuratedRules" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resetCuratedRules"></a>

```typescript
public resetCuratedRules(): void
```

##### `resetCuratedRuleSets` <a name="resetCuratedRuleSets" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resetCuratedRuleSets"></a>

```typescript
public resetCuratedRuleSets(): void
```

##### `resetRules` <a name="resetRules" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.resetRules"></a>

```typescript
public resetRules(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.deletedCuratedRuleSets">deletedCuratedRuleSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.curatedRuleSetsInput">curatedRuleSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.curatedRulesInput">curatedRulesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.rulesInput">rulesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.curatedRules">curatedRules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.curatedRuleSets">curatedRuleSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.rules">rules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication">GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deletedCuratedRuleSets`<sup>Required</sup> <a name="deletedCuratedRuleSets" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.deletedCuratedRuleSets"></a>

```typescript
public readonly deletedCuratedRuleSets: string[];
```

- *Type:* string[]

---

##### `curatedRuleSetsInput`<sup>Optional</sup> <a name="curatedRuleSetsInput" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.curatedRuleSetsInput"></a>

```typescript
public readonly curatedRuleSetsInput: string[];
```

- *Type:* string[]

---

##### `curatedRulesInput`<sup>Optional</sup> <a name="curatedRulesInput" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.curatedRulesInput"></a>

```typescript
public readonly curatedRulesInput: string[];
```

- *Type:* string[]

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.rulesInput"></a>

```typescript
public readonly rulesInput: string[];
```

- *Type:* string[]

---

##### `curatedRules`<sup>Required</sup> <a name="curatedRules" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.curatedRules"></a>

```typescript
public readonly curatedRules: string[];
```

- *Type:* string[]

---

##### `curatedRuleSets`<sup>Required</sup> <a name="curatedRuleSets" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.curatedRuleSets"></a>

```typescript
public readonly curatedRuleSets: string[];
```

- *Type:* string[]

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.rules"></a>

```typescript
public readonly rules: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplicationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication">GoogleChronicleFindingsRefinementDeploymentDetectionExclusionApplication</a>

---


### GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference <a name="GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleChronicleFindingsRefinementDeployment } from '@cdktn/provider-google-beta'

new googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeouts">GoogleChronicleFindingsRefinementDeploymentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleChronicleFindingsRefinementDeploymentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinementDeployment.GoogleChronicleFindingsRefinementDeploymentTimeouts">GoogleChronicleFindingsRefinementDeploymentTimeouts</a>

---



