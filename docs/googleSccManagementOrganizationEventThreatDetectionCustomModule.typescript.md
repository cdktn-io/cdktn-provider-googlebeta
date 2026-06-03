# `googleSccManagementOrganizationEventThreatDetectionCustomModule` Submodule <a name="`googleSccManagementOrganizationEventThreatDetectionCustomModule` Submodule" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSccManagementOrganizationEventThreatDetectionCustomModule <a name="GoogleSccManagementOrganizationEventThreatDetectionCustomModule" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module google_scc_management_organization_event_threat_detection_custom_module}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer"></a>

```typescript
import { googleSccManagementOrganizationEventThreatDetectionCustomModule } from '@cdktn/provider-google-beta'

new googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule(scope: Construct, id: string, config: GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig">GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig">GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.resetEnablementState">resetEnablementState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts">GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts</a>

---

##### `resetConfig` <a name="resetConfig" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.resetConfig"></a>

```typescript
public resetConfig(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEnablementState` <a name="resetEnablementState" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.resetEnablementState"></a>

```typescript
public resetEnablementState(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleSccManagementOrganizationEventThreatDetectionCustomModule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.isConstruct"></a>

```typescript
import { googleSccManagementOrganizationEventThreatDetectionCustomModule } from '@cdktn/provider-google-beta'

googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.isTerraformElement"></a>

```typescript
import { googleSccManagementOrganizationEventThreatDetectionCustomModule } from '@cdktn/provider-google-beta'

googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.isTerraformResource"></a>

```typescript
import { googleSccManagementOrganizationEventThreatDetectionCustomModule } from '@cdktn/provider-google-beta'

googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.generateConfigForImport"></a>

```typescript
import { googleSccManagementOrganizationEventThreatDetectionCustomModule } from '@cdktn/provider-google-beta'

googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleSccManagementOrganizationEventThreatDetectionCustomModule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleSccManagementOrganizationEventThreatDetectionCustomModule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleSccManagementOrganizationEventThreatDetectionCustomModule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleSccManagementOrganizationEventThreatDetectionCustomModule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.lastEditor">lastEditor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference">GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.configInput">configInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.enablementStateInput">enablementStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts">GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.config">config</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.enablementState">enablementState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `lastEditor`<sup>Required</sup> <a name="lastEditor" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.lastEditor"></a>

```typescript
public readonly lastEditor: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference">GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.configInput"></a>

```typescript
public readonly configInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `enablementStateInput`<sup>Optional</sup> <a name="enablementStateInput" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.enablementStateInput"></a>

```typescript
public readonly enablementStateInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts">GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.config"></a>

```typescript
public readonly config: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `enablementState`<sup>Required</sup> <a name="enablementState" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.enablementState"></a>

```typescript
public readonly enablementState: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig <a name="GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.Initializer"></a>

```typescript
import { googleSccManagementOrganizationEventThreatDetectionCustomModule } from '@cdktn/provider-google-beta'

const googleSccManagementOrganizationEventThreatDetectionCustomModuleConfig: googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.organization">organization</a></code> | <code>string</code> | Numerical ID of the parent organization. |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.config">config</a></code> | <code>string</code> | Config for the module. |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.displayName">displayName</a></code> | <code>string</code> | The human readable name to be displayed for the module. |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.enablementState">enablementState</a></code> | <code>string</code> | The state of enablement for the module at the given level of the hierarchy. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#id GoogleSccManagementOrganizationEventThreatDetectionCustomModule#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.location">location</a></code> | <code>string</code> | Location ID of the parent organization. Only global is supported at the moment. |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts">GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.type">type</a></code> | <code>string</code> | Immutable. Type for the module. e.g. CONFIGURABLE_BAD_IP. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

Numerical ID of the parent organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#organization GoogleSccManagementOrganizationEventThreatDetectionCustomModule#organization}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.config"></a>

```typescript
public readonly config: string;
```

- *Type:* string

Config for the module.

For the resident module, its config value is defined at this level.
For the inherited module, its config value is inherited from the ancestor module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#config GoogleSccManagementOrganizationEventThreatDetectionCustomModule#config}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#deletion_policy GoogleSccManagementOrganizationEventThreatDetectionCustomModule#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The human readable name to be displayed for the module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#display_name GoogleSccManagementOrganizationEventThreatDetectionCustomModule#display_name}

---

##### `enablementState`<sup>Optional</sup> <a name="enablementState" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.enablementState"></a>

```typescript
public readonly enablementState: string;
```

- *Type:* string

The state of enablement for the module at the given level of the hierarchy. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#enablement_state GoogleSccManagementOrganizationEventThreatDetectionCustomModule#enablement_state}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#id GoogleSccManagementOrganizationEventThreatDetectionCustomModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Location ID of the parent organization. Only global is supported at the moment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#location GoogleSccManagementOrganizationEventThreatDetectionCustomModule#location}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts">GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#timeouts GoogleSccManagementOrganizationEventThreatDetectionCustomModule#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Immutable. Type for the module. e.g. CONFIGURABLE_BAD_IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#type GoogleSccManagementOrganizationEventThreatDetectionCustomModule#type}

---

### GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts <a name="GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts.Initializer"></a>

```typescript
import { googleSccManagementOrganizationEventThreatDetectionCustomModule } from '@cdktn/provider-google-beta'

const googleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts: googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#create GoogleSccManagementOrganizationEventThreatDetectionCustomModule#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#delete GoogleSccManagementOrganizationEventThreatDetectionCustomModule#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#update GoogleSccManagementOrganizationEventThreatDetectionCustomModule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#create GoogleSccManagementOrganizationEventThreatDetectionCustomModule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#delete GoogleSccManagementOrganizationEventThreatDetectionCustomModule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_scc_management_organization_event_threat_detection_custom_module#update GoogleSccManagementOrganizationEventThreatDetectionCustomModule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference <a name="GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleSccManagementOrganizationEventThreatDetectionCustomModule } from '@cdktn/provider-google-beta'

new googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts">GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleSccManagementOrganizationEventThreatDetectionCustomModule.GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts">GoogleSccManagementOrganizationEventThreatDetectionCustomModuleTimeouts</a>

---



